'use client'
import React, { memo, useState } from "react";
import { useFormik } from "formik";
import { usePathname } from "next/navigation";
import { AutoSearch } from "../component";
import { SearchEngineProps } from "../utils/types";
import { validationSchema } from "../utils/schema";
import { initialValues, searchOption } from "../utils/data";
import { useRouter } from 'next/navigation';
import "./searchEngine.css"

const today = new Date().toISOString().split('T')[0];
const MAX_TRAVELERS = 9;

/* ── tiny stat cards shown below the search bar ── */
const STATS = [
    {
        big: '2.4M',
        tag: '+12%',
        label: 'Flights booked this year',
        showProgress: true,
    },
    {
        big: '₹1,240',
        label: 'avg saved',
        sub: 'Per booking vs. other platforms',
    },
    {
        big: '98%',
        inline: 'on-time',
        label: 'Support resolution rate',
        showDown: true,
    },
    {
        big: '500+',
        label: 'airlines',
        sub: 'Partner airlines worldwide',
    },
];

const SearchEngine: React.FC<SearchEngineProps> = ({ handleToggle }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [sectors, setSectors] = useState([{ id: 1 }]);
    const isSearch = usePathname() === '/search';
    const router = useRouter();

    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

    const handleAddSector = () => {
        setSectors(prev => [...prev, { id: Date.now() }]);
    };

    const handleDeleteSector = (id: number) => {
        setSectors(prev => prev.filter(s => s.id !== id));
    };

    const formik = useFormik({
        initialValues: initialValues(isSearch),
        validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            handleToggle && handleToggle();
            const params = new URLSearchParams({
                departFrom:    values.departFrom,
                arrivalTo:     values.arrivalTo,
                departureDate: values.departureDate,
                returnDate:    values.returnDate || '',
                selectedTab:   values.selectedTab,
                adults:        String(values.travelers.adults),
                children:      String(values.travelers.children),
                infants:       String(values.travelers.infants),
            });
            router.push(`/search?${params.toString()}`);
            setSubmitting(false);
        },
    });

    const {
        values, handleChange, errors, touched,
        handleSubmit, setFieldValue, isSubmitting,
    } = formik;

    const isRoundTrip = values.selectedTab === 'Round Trip';
    const isMultiCity = values.selectedTab === 'Multi City';
    const { adults, children, infants } = values.travelers;
    const totalTravelers = adults + children + infants;

    /* traveller button label */
    const travelerLabel = [
        `${adults} Adult${adults !== 1 ? 's' : ''}`,
        children > 0 ? `${children} Child${children !== 1 ? 'ren' : ''}` : '',
        infants  > 0 ? `${infants} Infant${infants  !== 1 ? 's' : ''}` : '',
    ].filter(Boolean).join(' · ');

    return (
        <form className="se-wrap" onSubmit={handleSubmit}>

            {/* ── Trip-type tabs ── */}
            <ul className={`se-tabs ${isSearch ? 'd-none' : ''}`}>
                {(['One Way', 'Round Trip', 'Multi City'] as const).map((tab) => (
                    <li key={tab}>
                        <input
                            type="radio"
                            id={`tab-${tab}`}
                            name="selectedTab"
                            className="d-none"
                            checked={values.selectedTab === tab}
                            onChange={() => setFieldValue('selectedTab', tab)}
                        />
                        <label
                            htmlFor={`tab-${tab}`}
                            className={`se-tab-label ${values.selectedTab === tab ? 'active' : ''}`}
                        >
                            <span className="se-tab-dot" />
                            {tab}
                        </label>
                    </li>
                ))}
            </ul>

            {/* ── Main search bar ── */}
            <div className="se-bar">

                {/* Depart From */}
                <div className="se-field se-field--auto">
                    <AutoSearch
                        setFieldValue={setFieldValue}
                        label="Depart From"
                        options={searchOption}
                        error={errors?.departFrom}
                        name="departFrom"
                    />
                </div>

                {/* Swap divider with button */}
                <div style={{ position: 'relative', width: 0, zIndex: 10 }}>
                    <button
                        type="button"
                        className="se-swap-btn"
                        title="Swap cities"
                        onClick={() => {
                            const from = values.departFrom;
                            const to   = values.arrivalTo;
                            setFieldValue('departFrom', to);
                            setFieldValue('arrivalTo',  from);
                        }}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="13" height="13">
                            <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                    </button>
                </div>

                <div className="se-divider" />

                {/* Arrival To */}
                <div className="se-field se-field--auto">
                    <AutoSearch
                        setFieldValue={setFieldValue}
                        label="Arrival To"
                        options={searchOption}
                        error={errors?.arrivalTo}
                        name="arrivalTo"
                    />
                </div>

                <div className="se-divider" />

                {/* Departure Date */}
                <div className="se-field se-field--date">
                    <label className="se-label">Departure</label>
                    <input
                        type="date"
                        name="departureDate"
                        className="se-input"
                        value={values.departureDate}
                        min={today}
                        onChange={(e) => {
                            handleChange(e);
                            if (isRoundTrip && values.returnDate && e.target.value > values.returnDate) {
                                setFieldValue('returnDate', '');
                            }
                        }}
                    />
                    {!values.departureDate && (
                        <span className="se-date-hint">Select date</span>
                    )}
                    {errors.departureDate && touched.departureDate && (
                        <span className="se-error">{errors.departureDate}</span>
                    )}
                </div>

                {/* Return Date — only for Round Trip */}
                {isRoundTrip && (
                    <>
                        <div className="se-divider" />
                        <div className="se-field se-field--date">
                            <label className="se-label">Return</label>
                            <input
                                type="date"
                                name="returnDate"
                                className="se-input"
                                value={values.returnDate}
                                min={values.departureDate || today}
                                onChange={handleChange}
                            />
                            {!values.returnDate && (
                                <span className="se-date-hint">Select date</span>
                            )}
                            {errors.returnDate && touched.returnDate && (
                                <span className="se-error">{errors.returnDate}</span>
                            )}
                        </div>
                    </>
                )}

                <div className="se-divider" />

                {/* Travellers & Class */}
                <div className="se-field se-field--travelers">
                    <label className="se-label">Travellers &amp; Class</label>
                    <div className="se-dropdown-wrap">
                        <button
                            type="button"
                            className="se-travelers-btn"
                            onClick={toggleDropdown}
                        >
                            <span>{travelerLabel} · Economy</span>
                            <svg
                                className={`se-chevron ${dropdownVisible ? 'open' : ''}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                width="14"
                                height="14"
                            >
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>
                        <span className="se-travelers-sub">Max 9 per booking</span>

                        {dropdownVisible && (
                            <div className="se-travelers-panel">
                                {([
                                    { key: 'adults',   label: 'Adults',   sub: '12+ yrs',     min: 1, max: Math.min(MAX_TRAVELERS, MAX_TRAVELERS - totalTravelers + adults) },
                                    { key: 'children', label: 'Children', sub: '2–11 yrs',    min: 0, max: Math.min(adults, MAX_TRAVELERS - totalTravelers + children) },
                                    { key: 'infants',  label: 'Infants',  sub: 'Under 2 yrs', min: 0, max: Math.min(adults, MAX_TRAVELERS - totalTravelers + infants) },
                                ] as const).map(({ key, label, sub, min, max }) => {
                                    const val = values.travelers[key];
                                    return (
                                        <div className="se-counter-row" key={key}>
                                            <div className="se-counter-label">
                                                <span>{label}</span>
                                                <small>{sub}</small>
                                            </div>
                                            <div className="se-counter">
                                                <button
                                                    type="button"
                                                    className="se-counter-btn"
                                                    disabled={val <= min}
                                                    onClick={() => {
                                                        const next = Math.max(min, val - 1);
                                                        setFieldValue(`travelers.${key}`, next);
                                                        if (key === 'adults') {
                                                            if (children > next) setFieldValue('travelers.children', next);
                                                            if (infants  > next) setFieldValue('travelers.infants',  next);
                                                        }
                                                    }}
                                                >−</button>
                                                <span className="se-counter-val">{val}</span>
                                                <button
                                                    type="button"
                                                    className="se-counter-btn"
                                                    disabled={val >= max || totalTravelers >= MAX_TRAVELERS}
                                                    onClick={() => setFieldValue(`travelers.${key}`, val + 1)}
                                                >+</button>
                                            </div>
                                        </div>
                                    );
                                })}

                                {totalTravelers >= MAX_TRAVELERS && (
                                    <p className="se-warn">Max {MAX_TRAVELERS} travellers per booking.</p>
                                )}

                                <button
                                    type="button"
                                    className="se-done-btn"
                                    onClick={() => setDropdownVisible(false)}
                                >
                                    Done
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Search button */}
                <div className="se-search-wrap">
                    {isMultiCity && (
                        <button type="button" className="se-add-sector" onClick={handleAddSector}>
                            + Add Sector
                        </button>
                    )}
                    <button type="submit" className="se-search-btn" disabled={isSubmitting}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                            <circle cx="11" cy="11" r="8" />
                            <path d="M21 21l-4.35-4.35" />
                        </svg>
                        Search Flights
                    </button>
                </div>
            </div>

            {/* ── Multi City sectors ── */}
            {isMultiCity && sectors.map((sector, index) => (
                <div className="se-bar se-bar--sector" key={sector.id}>
                    <div className="se-field se-field--auto">
                        <AutoSearch
                            label="Depart From"
                            options={searchOption}
                            setFieldValue={setFieldValue}
                            name={`sectors[${index}].departFrom`}
                        />
                    </div>
                    <div className="se-divider" />
                    <div className="se-field se-field--auto">
                        <AutoSearch
                            label="Arrival To"
                            options={searchOption}
                            setFieldValue={setFieldValue}
                            name={`sectors[${index}].arrivalTo`}
                        />
                    </div>
                    <div className="se-divider" />
                    <div className="se-field se-field--date">
                        <label className="se-label">Departure</label>
                        <input
                            type="date"
                            name={`sectors[${index}].departureDate`}
                            className="se-input"
                            value={values?.sectors?.[index]?.departureDate ?? ''}
                            onChange={handleChange}
                            min={today}
                        />
                    </div>
                    <button
                        type="button"
                        className="se-remove-sector"
                        onClick={() => handleDeleteSector(sector.id)}
                        disabled={sectors.length <= 1}
                        title="Remove sector"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6l-1 14H6L5 6" />
                            <path d="M10 11v6M14 11v6" />
                            <path d="M9 6V4h6v2" />
                        </svg>
                    </button>
                </div>
            ))}

            {/* ── Toggles ── */}
            <div className={`se-toggles ${isSearch ? 'd-none' : ''}`}>
                {/* Nonstop */}
                <label className="se-toggle">
                    <input type="checkbox" id="stop_mode" name="stop_mode" onChange={handleChange} defaultChecked />
                    <span className="se-toggle-track">
                        <span className="se-toggle-thumb" />
                    </span>
                    <span className="se-toggle-labels">
                        <span className="se-toggle-off">Stop</span>
                        <span className="se-toggle-on">&nbsp;Nonstop only</span>
                    </span>
                </label>

                {/* Flexible dates */}
                <label className="se-toggle">
                    <input type="checkbox" id="flex_mode" name="flex_mode" onChange={handleChange} />
                    <span className="se-toggle-track">
                        <span className="se-toggle-thumb" />
                    </span>
                    <span className="se-toggle-labels">
                        <span className="se-toggle-off">Fixed dates</span>
                        <span className="se-toggle-on">&nbsp;Flexible dates</span>
                    </span>
                </label>

                {/* Student fares */}
                <label className="se-toggle">
                    <input type="checkbox" id="class_mode" name="class_mode" onChange={handleChange} />
                    <span className="se-toggle-track">
                        <span className="se-toggle-thumb" />
                    </span>
                    <span className="se-toggle-labels">
                        <span className="se-toggle-off">Regular</span>
                        <span className="se-toggle-on">&nbsp;Student fares</span>
                    </span>
                </label>
            </div>

            {/* ── Stats row ── */}
            {!isSearch && (
                <div className="se-stats">
                    {/* 2.4M */}
                    <div className="se-stat-card">
                        <div>
                            <span className="se-stat-big">2.4M</span>
                            <span className="se-stat-tag">+12%</span>
                        </div>
                        <div className="se-stat-label">Flights booked this year</div>
                        <div className="se-progress">
                            <div className="se-progress-bar" />
                        </div>
                    </div>

                    {/* ₹1,240 */}
                    <div className="se-stat-card">
                        <div className="se-stat-big">₹1,240</div>
                        <div className="se-stat-label">avg saved</div>
                        <div className="se-stat-sub">Per booking vs. other platforms</div>
                    </div>

                    {/* 98% */}
                    <div className="se-stat-card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span className="se-stat-big">98%</span>
                            <span className="se-stat-inline">on-time</span>
                            <div style={{
                                marginLeft: 'auto',
                                width: 26, height: 26,
                                borderRadius: '50%',
                                background: '#1e3a5f',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="#5a8ab5" strokeWidth="2" width="13" height="13">
                                    <path d="M12 5v14M5 12l7 7 7-7" />
                                </svg>
                            </div>
                        </div>
                        <div className="se-stat-label">Support resolution rate</div>
                    </div>

                    {/* 500+ */}
                    <div className="se-stat-card">
                        <div className="se-stat-big">500+</div>
                        <div className="se-stat-label">airlines</div>
                        <div className="se-stat-sub">Partner airlines worldwide</div>
                    </div>
                </div>
            )}

        </form>
    );
};

export default memo(SearchEngine);
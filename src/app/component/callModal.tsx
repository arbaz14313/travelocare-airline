'use client'
import Link from 'next/link';
import Image from 'next/image';
import { memo, useEffect } from 'react';
import { Modalprops } from '../utils/types';
import { CallSupport } from '../utils/images';

const CallModal: React.FC<Modalprops> = ({ show, handleClose, setShow, ispath = true }) => {

  useEffect(() => {
    if (ispath) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {show && (
        <div
          className="modal fade show d-block"
          id="exampleModalCenter"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="flight booking"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div
              className="modal-content"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: 'none',
                maxWidth: '420px',
                margin: '0 auto',
                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                overflow: 'hidden',
              }}
            >
              {/* Header */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #0b1f3a 0%, #133258 100%)',
                  padding: '24px 24px 20px',
                  position: 'relative',
                }}
              >
                <button
                  type="button"
                  onClick={handleClose}
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    background: 'rgba(255,255,255,0.15)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#fff',
                    fontSize: '16px',
                    lineHeight: 1,
                  }}
                  aria-label="Close"
                >
                  &times;
                </button>

                {/* Verified badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(255,255,255,0.12)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '100px',
                    padding: '4px 12px',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.85)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#4ade80',
                      display: 'inline-block',
                    }}
                  />
                  Official Support · 24 / 7
                </div>

                <h5
                  style={{
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '18px',
                    margin: 0,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Airline Customer Support
                </h5>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.65)',
                    fontSize: '13px',
                    margin: '6px 0 0',
                  }}
                >
                  Reservations · Cancellations · Modifications
                </p>
              </div>

              {/* Body */}
              <div style={{ padding: '24px' }}>

                {/* Agent image */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <Image
                    alt="Support agent"
                    src={CallSupport}
                    width={52}
                    height={52}
                    style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid #e8f0fe' }}
                  />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px', color: '#0b1f3a' }}>
                      Speak with a specialist
                    </div>
                    <div style={{ fontSize: '12px', color: '#6b7f96', marginTop: '2px' }}>
                      Average wait: &lt; 4 minutes
                    </div>
                  </div>
                </div>

                {/* Phone number */}
                <div
                  style={{
                    background: '#f4f7fc',
                    border: '1px solid #d6e0ef',
                    borderRadius: '10px',
                    padding: '16px',
                    marginBottom: '16px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '12px', color: '#6b7f96', marginBottom: '6px', fontWeight: 500 }}>
                    TOLL-FREE NUMBER
                  </div>
                  <Link
                    href="tel:16176694209"
                    style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#0b1f3a',
                      textDecoration: 'none',
                      letterSpacing: '0.02em',
                    }}
                  >
                    1-617-669-4209
                  </Link>
                </div>

                {/* CTA button */}
                <Link
                  href="tel:16176694209"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: '#2a6dd9',
                    color: '#ffffff',
                    padding: '13px 20px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '14px',
                    textDecoration: 'none',
                    marginBottom: '16px',
                    transition: 'opacity 0.2s',
                  }}
                >
                  <i className="bi bi-telephone-fill" />
                  Call Now
                </Link>

                {/* Trust row */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    flexWrap: 'wrap',
                  }}
                >
                  {[
                    { icon: 'bi-shield-check', label: 'Secure' },
                    { icon: 'bi-lock', label: 'No hidden fees' },
                    { icon: 'bi-clock', label: '24 / 7' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '12px',
                        color: '#6b7f96',
                        fontWeight: 500,
                      }}
                    >
                      <i className={`bi ${item.icon}`} style={{ color: '#2a6dd9' }} />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(CallModal);
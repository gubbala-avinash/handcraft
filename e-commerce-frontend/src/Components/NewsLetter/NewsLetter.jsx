import React from 'react';
import './NewsLetter.css'
import { Link } from 'react-router-dom';

const NewsLetter = () => {
  return (
    <div 
    className="about2_banner" 
    data-content-type="row" 
    data-appearance="full-bleed" 
    data-enable-parallax="0" 
    data-parallax-speed="0.5" 
    data-background-images="{}" 
    data-background-type="image" 
    data-video-loop="true" 
    data-video-play-only-visible="true" 
    data-video-lazy-load="true" 
    data-video-fallback-src="" 
    data-element="main" 
    data-pb-style="P2TPS0Y" 
    style={{ fontSize: '14px' }}
  >
    <div 
      data-content-type="html" 
      data-appearance="default" 
      data-element="main" 
      data-pb-style="SWJGQL7" 
      data-decoded="true" 
      style={{ fontSize: '14px' }}
    >
      <div id="sellerbanner" style={{ fontSize: '14px' }}>
        
        <Link to="http://localhost:3001/addproduct" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px' }}>
          <picture style={{ fontSize: '14px' }}>
            <source media="(min-width:769px)" srcSet="	https://www.indiahandmade.com/pub/media/wysiwyg/buyerbanner.webp" style={{ fontSize: '14px' }} />
            <source media="(min-width:650px)" srcSet="	https://www.indiahandmade.com/pub/media/wysiwyg/buyerbanner.webp" style={{ fontSize: '14px' }} />  
            <img 
              srcSet="	https://www.indiahandmade.com/pub/media/wysiwyg/buyerbanner.webp" 
              alt="Seller Register" 
              style={{ width: 'auto', fontSize: '14px' }} 
              loading="lazy" 
            />
          </picture>

          <div className="relibl_banner" style={{ fontSize: '14px' }}>
            <div className="colItem lgbanner" style={{ fontSize: '14px' }}>
              <p style={{ fontSize: '18px' }}>
                sell hassle free become
                <span style={{ fontSize: '40px' }}>Indiahandmade seller</span>
              </p>
              <div className="shopnow" style={{ fontSize: '16px' }}>Register Now</div>
            </div>

            <div className="colItem" style={{ fontSize: '14px' }}>
              <div className="colitems" style={{ fontSize: '14px' }}>
                <div className="itemimg" style={{ fontSize: '14px' }}>
                  <img 
                    srcSet="https://www.indiahandmade.com/pub/media/wysiwyg/seller-banner-03.webp" 
                    alt="seller 1" 
                    style={{ fontSize: '14px' }} 
                  />
                  <span style={{ fontSize: '12px' }}>making of handcrafted items</span>
                </div>
              </div>
              <div className="colitems" style={{ fontSize: '14px' }}>
                <div className="itemimg" style={{ fontSize: '14px' }}>
                  <img 
                    srcSet="https://www.indiahandmade.com/pub/media/wysiwyg/seller-banner-04.webp" 
                    alt="seller 2" 
                    style={{ fontSize: '14px' }} 
                  />
                  <span style={{ fontSize: '12px' }}>uploading products on the portal</span>
                </div>
              </div>
              <div className="colitems" style={{ fontSize: '14px' }}>
                <div className="itemimg" style={{ fontSize: '14px' }}>
                  <img 
                    srcSet="https://www.indiahandmade.com/pub/media/wysiwyg/seller-banner-05.webp" 
                    alt="seller" 
                    style={{ fontSize: '14px' }} 
                  />
                  <span style={{ fontSize: '12px' }}>receive money in their respective bank account</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default NewsLetter;

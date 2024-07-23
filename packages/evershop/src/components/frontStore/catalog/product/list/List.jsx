import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
const stripHtmlTags = (str) => {
  if (!str) return '';
  return str.replace(/<\/?[^>]+(>|$)/g, '');
};

export default function ProductList({ products = [] }) {
// console.log("products ", products);
  const [startIndex, setStartIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef(null);
  const cardCount = products.length;

  useEffect(() => {
    const resizeHandler = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth + 15);
      }
    };

    resizeHandler();
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [startIndex]);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    let limit = cardCount - 1;

    if (window.innerWidth <= 767) {
      limit = cardCount - 1;
    } else if (window.innerWidth <= 1024) {
      limit = cardCount - 2;
    }

    if (startIndex < limit) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  let value = 3;

  if (window.innerWidth < 1025) {
    value = 2;
  }

  if (window.innerWidth < 767) {
    value = 1;
  }

  if (products.length === 0) {
    return (
      <div className="product-list">
        <div className="text-center">{_('There is no product to display')}</div>
      </div>
    );
  }

  return (
    <>

      <div className="sectionTitleWrap">
        <h2>What end users will get with Pre-Booking Amount?</h2>
        <p>
          By booking, users will unlock lifetime access to over 25 digital
          courses covering diverse topics like programming, photography,
          business, and writing.
        </p>
      </div>
      <div className="slider-container">
        <div className="buttons">
          <button onClick={handlePrev} disabled={startIndex === 0}>
            <span>
              <svg

                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464467C7.97631 0.269205 7.65973 0.269204 7.46447 0.464467C7.2692 0.659729 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM1 4.5L11 4.5L11 3.5L1 3.5L1 4.5Z"
                  fill="#919191"
                />
              </svg>
            </span>
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex === cardCount - value}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464467C7.97631 0.269205 7.65973 0.269204 7.46447 0.464467C7.2692 0.659729 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM1 4.5L11 4.5L11 3.5L1 3.5L1 4.5Z"
                  fill="#919191"
                />
              </svg>
            </span>
          </button>
        </div>
        <div
          className="slider"
          style={{ transform: `translateX(-${startIndex * cardWidth}px)` }}
        >
          <div className="row flex-nowrap">
            {products.map((p, index) => (
              <div className="col-md-4 resCard" key={p.productId}>
                
                <a href={p.url}
                >
                  <div
                    className="boxed"
                    ref={index === 0 ? cardRef : null}
                    style={{
                      backgroundImage: p.image && p.image.url ? `url(${p.image.url})` : '',
                    }}
                  >
                    <div className="rightTopBox">
                      <h5>{p.name}</h5>
                      <h6>{p.sku}</h6>
                    </div>
                    <div className="midlBox">
                      <h4>{p.name}</h4>
                      <p>{stripHtmlTags(p.description)}</p>
                    </div>
                  </div>
                </a>

              </div>
            ))}
          </div>
        </div>
      </div>
     
    </>
  );
}


ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      sku: PropTypes.string,
      productId: PropTypes.number,
      url: PropTypes.string,
      description: PropTypes.string.isRequired,
      price: PropTypes.shape({
        regular: PropTypes.shape({
          value: PropTypes.number,
          text: PropTypes.string,
        }),
        special: PropTypes.shape({
          value: PropTypes.number,
          text: PropTypes.string,
        }),
      }),
      image: PropTypes.shape({
        alt: PropTypes.string,
        url: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

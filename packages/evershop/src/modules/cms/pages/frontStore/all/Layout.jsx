import React, { useEffect, useState } from 'react';
import Area from '@components/common/Area';
import LoadingBar from '@components/common/LoadingBar';
import '../../../../../assets/main.scss';
import BannerContent from '../homepage/BannerContent';
import SolarisGrid from '../homepage/SolarisGrid';
import BenefitsWrap from '../homepage/BenefitsWrap';
import FeatureSliderSection from '../homepage/FeatureSliderSection';
import WindowPro from '../homepage/WindowPro';
import PurePerformance from '../homepage/PurePerformance';
import ProductFeature from '../homepage/ProductFeature';
import PreOrderSection from '../homepage/PreOrderSection';
import Clients from '../homepage/Clients';
import CustomCaraouselWrap from '../homepage/customecarousel/CustomCaraouselWrap';
import cardData from '../homepage/customecarousel/cardsslide/card';
import ProductList from '@components/frontStore/catalog/product/list/List';
import Navbar from '../homepage/Navbar/Navbar';
import Courses from '@evershop/evershop/src/modules/catalog/pages/frontStore/productView/Courses';
import AddressForm from '@evershop/evershop/src/modules/catalog/pages/frontStore/addressFormView/AddressForm';

export default function Layout() {
  const [modalData, setModalData] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [address, setAddress] = useState({
    fullName: '',
    telephone: '',
    address: '',
    city: '',
    country: '',
    province: '',
    postcode: ''
  });

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              product(id: 86) {
                productId
                sku
                url
                name
                description
                price {
                  regular {
                    value
                    currency
                    text
                  }
                }
                gallery {
                  thumb
                  alt
                  single
                }
                inventory {
                  isInStock
                }
                variantGroup {
                  items {
                    id
                    attributes {
                      attributeId
                      attributeCode
                      optionId
                      optionText
                    }
                    product {
                      productId
                      uuid
                      name
                      url
                      sku
                      status
                      visibility
                      price {
                        regular {
                          value
                          currency
                          text
                        }
                      }
                      image {
                        uuid
                        url
                        alt
                        thumb
                        single
                      }
                      gallery {
                        uuid
                        url
                        alt
                        thumb
                        single
                      }
                    }
                  }
                }
                uuid
                image {
                  alt
                  thumb
                  single
                }
                attributes: attributeIndex {
                  attributeName
                  attributeCode
                  optionText
                }
              }
              courses {
                courseName
                courseCode
              }
            }
          `,
        }),
      });
      const result = await response.json();
      setModalData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const modalElement = document.getElementById('opModal');
    modalElement.addEventListener('show.bs.modal', fetchData);
    return () => {
      modalElement.removeEventListener('show.bs.modal', fetchData);
    };
  }, []);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  return (
    <>
      <LoadingBar />
      <Navbar />
      <main className="content">
        <section id='bannerSection'>
          <BannerContent />
        </section>
        <section id="clients" className="clients">
          <Clients />
        </section>
        <section id="bookAmtCarousel">
          <CustomCaraouselWrap cards={cardData} />
          <ProductList />
        </section>

        <section id="solarisGridSection">
          <SolarisGrid />
        </section>
        <section id="featureSliderSection">
          <FeatureSliderSection />
        </section>
        <section id="windowProSection">
          <WindowPro />
        </section>

        <section id="solarisBenefits">
          <BenefitsWrap />
        </section>

        <section id="purePerformanceSection">
          <PurePerformance />
        </section>

        <section id="productFeature">
          <ProductFeature />
        </section>

        <section id="preOrderBookingSection">
          <PreOrderSection />
        </section>
      </main>

      <div className="footer">
        <Area id="footer" noOuter coreComponents={[]} />
      </div>

      {/* Modal pop up */}
      <div className="modal fade" id="opModal" tabIndex="-1" aria-labelledby="opModalModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Product Details</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {modalData ? (
                <div>
                  {currentStep === 1 && (
                    <div>
                      <h2>{modalData.product.name}</h2>
                      <p><strong>SKU:</strong> {modalData.product.sku}</p>
                      <p><strong>URL:</strong> {modalData.product.url}</p>
                      <p><strong>Description:</strong> {modalData.product.description}</p>
                      <p><strong>Price:</strong> {modalData.product.price.regular.text}</p>
                      <div>
                        {/* <h3>Gallery</h3>
                        {modalData.product.gallery.map((image, index) => (
                          <div key={index}>
                            <img src={image.thumb} alt={image.alt} />
                          </div>
                        ))} */}
                      </div>
                      <div>
                        <h3>Attributes</h3>
                        {modalData.product.attributes.map((attribute, index) => (
                          <div key={index}>
                            <p>{attribute.attributeName}: {attribute.optionText}</p>
                          </div>
                        ))}
                      </div>
                      <div>
                        <h3>Variants</h3>
                        {modalData.product.variantGroup.items.map((variant, index) => (
                          <div key={index}>
                            <p><strong>Variant ID:</strong> {variant.id}</p>
                            <p><strong>Attributes:</strong></p>
                            {variant.attributes.map((attr, idx) => (
                              <p key={idx}>{attr.attributeCode}: {attr.optionText}</p>
                            ))}
                            <p><strong>Product:</strong> {variant.product.name}</p>
                            <p><strong>SKU:</strong> {variant.product.sku}</p>
                            <p><strong>Price:</strong> {variant.product.price.regular.text}</p>
                            <div>
                              <img src={variant.product.image.thumb} alt={variant.product.image.alt} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {currentStep === 2 && (
                    <div>
                      <h3>Courses</h3>
                      <Courses
                        courses={modalData.courses}
                        selectedCourse={selectedCourse}
                        setSelectedCourse={setSelectedCourse}
                      />
                    </div>
                  )}
                  {currentStep === 3 && (
                    <div>
                      <AddressForm
                        address={address}
                        handleChange={handleChange}
                        currentStep={currentStep}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <div className="modal-footer">
              {currentStep > 1 && (
                <button type="button" className="btn btn-secondary" onClick={handlePrevious}>Previous</button>
              )}
              {currentStep < 3 ? (
                <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
              ) : (
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const layout = {
  areaId: 'body',
  sortOrder: 1
};

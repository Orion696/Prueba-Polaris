import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Page } from '@shopify/polaris';
import './Layout.css';
import PolarisButton from './PolarisButton';
import CentralContent from './CentralContent';
import StyleChanger from './StyleChanger';
import useWindowSize from './useWindowSize';

const Layout = () => {
  const windowSize = useWindowSize();
  const [showRightColumn, setShowRightColumn] = useState(false);
  const [acordeonOpen, setAcordeonOpen] = useState(false);
  const [isAcordeonOptionVisible, setIsAcordeonOptionVisible] = useState({ back: false, styleChanger: false });

  const handleCentralButtonClick = () => {
    if (windowSize.width > 333) {
      setShowRightColumn(!showRightColumn);
    }
  };

  const toggleAcordeonOption = (option) => {
    setIsAcordeonOptionVisible((prevState) => ({
      ...{ back: false, styleChanger: false },
      [option]: !prevState[option],
    }));
    setAcordeonOpen(true);
  };

  return (
    <Page fullWidth>
      <div className="container-fluid">
        <div className="row">
          {windowSize.width <= 333 ? (
            <div className="col">
              <CentralContent onClick={handleCentralButtonClick} />
              <div>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        onClick={() => setAcordeonOpen(!acordeonOpen)}
                      >
                        Menú
                      </button>
                    </h2>
                    {acordeonOpen && (
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                      >
                        <div className="accordion-body">
                          <PolarisButton onClick={() => toggleAcordeonOption('back')} style={{ marginRight: '30px' }}>
                            &lt; Atrás
                          </PolarisButton>
                          {isAcordeonOptionVisible.back}
                          <PolarisButton onClick={() => toggleAcordeonOption('styleChanger')}>StyleChanger</PolarisButton>
                          {isAcordeonOptionVisible.styleChanger && <StyleChanger />}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="col left-column container">
                {windowSize.width > 333 && (
                  <PolarisButton onClick={() => setShowRightColumn(false)}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ marginRight: '30px' }}>&lt;</span> Atrás
                    </div>
                  </PolarisButton>
                )}
                {windowSize.width > 333 && windowSize.width <= 990 && showRightColumn && (
                  <>
                    <div className="separator-line"></div>
                    <StyleChanger />
                  </>
                )}
              </div>

              <div className={windowSize.width > 990 ? 'col-6 central-column container' : 'col container'}>
                <CentralContent onClick={handleCentralButtonClick} />
              </div>

              {showRightColumn && windowSize.width > 990 && (
                <div className="col-3 right-column container">
                  <StyleChanger />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Page>
  );
};

export default Layout;

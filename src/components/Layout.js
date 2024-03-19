import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Page } from '@shopify/polaris';
import './Layout.css';
import PolarisButton from './PolarisButton';
import CentralContent from './CentralContent';
import StyleChanger from './StyleChanger';
import useWindowSize from './useWindowSize';
import Acordeon from './Acordeon';

const Layout = () => {
  const windowSize = useWindowSize();
  const [showRightColumn, setShowRightColumn] = useState(false);
  const [acordeonOpen, setAcordeonOpen] = useState(false);

  const handleCentralButtonClick = () => {
    if (windowSize.width > 333) {
      setShowRightColumn(!showRightColumn);
    }
  };

  const handleBackButtonClick = () => {
    if (windowSize.width <= 333) {
      setAcordeonOpen(false);
    } else {
      setShowRightColumn(false);
    }
  };

  return (
    <Page fullWidth>
      <div className="container-fluid">
        <div className="row">
          <div className="col left-column">
            {windowSize.width > 333 && (
              <PolarisButton onClick={handleBackButtonClick}>
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

          <div className={windowSize.width > 990 ? 'col-6 central-column' : 'col'}>
            <CentralContent onClick={handleCentralButtonClick} />
            {windowSize.width <= 333 && (
              <Acordeon isOpen={acordeonOpen} setIsOpen={setAcordeonOpen}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                  <PolarisButton onClick={handleBackButtonClick} style={{ width: '100%', justifyContent: 'center' }}>{"< Atrás"}</PolarisButton>
                  <StyleChanger />
                </div>
              </Acordeon>
            )}
          </div>

          {showRightColumn && windowSize.width > 990 && (
            <div className="col-3 right-column">
              <StyleChanger />
            </div>
          )}
        </div>
      </div>
    </Page>
  );
};

export default Layout;

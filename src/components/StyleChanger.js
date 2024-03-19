import React, { useState, useCallback } from 'react';
import { Card, TextField } from '@shopify/polaris';
import './StyleChanger.css';

const StyleChanger = () => {
  const initialTitleText = 'Lorem ipsum dolor sit amet';
  const initialParagraphText = 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const initialButtonText = 'Est laborum';
  const initialTitleStyles = `color: black; font-size: 24px; font-weight: bold;`;
  const initialParagraphStyles = `color: black; font-size: 16px;`;
  const initialButtonStyles = `color: white; background-color: red; border-color: darkred; border-radius: 20px;`;

  const [titleText, setTitleText] = useState(initialTitleText);
  const handleChangeTitleText = useCallback((newValue) => setTitleText(newValue), []);
  
  const [paragraphText, setParagraphText] = useState(initialParagraphText);
  const handleChangeParagraphText = useCallback((newValue) => setParagraphText(newValue), []);

  const [buttonText, setButtonText] = useState(initialButtonText);
  const handleChangeButtonText = useCallback((newValue) => setButtonText(newValue), []);

  const [titleStyles, setTitleStyles] = useState(initialTitleStyles);
  const handleChangeTitleStyles = useCallback((newValue) => setTitleStyles(newValue), []);

  const [paragraphStyles, setParagraphStyles] = useState(initialParagraphStyles);
  const handleChangeParagraphStyles = useCallback((newValue) => setParagraphStyles(newValue), []);

  const [buttonStyles, setButtonStyles] = useState(initialButtonStyles);
  const handleChangeButtonStyles = useCallback((newValue) => setButtonStyles(newValue), []);

  return (
    <Card sectioned>
      <div className="style-changer-container">
        <div className="group-container">
          <TextField label="Título" value={titleText} onChange={handleChangeTitleText} autoComplete="off" />
          <TextField label="Estilos del Título" value={titleStyles} onChange={handleChangeTitleStyles} multiline={4} autoComplete="off" />
        </div>
        <div className="group-container">
          <TextField label="Párrafo" value={paragraphText} onChange={handleChangeParagraphText} autoComplete="off" />
          <TextField label="Estilos del Párrafo" value={paragraphStyles} onChange={handleChangeParagraphStyles} multiline={4} autoComplete="off" />
        </div>
        <div className="group-container">
          <TextField label="Texto del Botón" value={buttonText} onChange={handleChangeButtonText} autoComplete="off" />
          <TextField label="Estilos del Botón" value={buttonStyles} onChange={handleChangeButtonStyles} multiline={4} autoComplete="off" />
        </div>
      </div>
    </Card>
  );
};

export default StyleChanger;
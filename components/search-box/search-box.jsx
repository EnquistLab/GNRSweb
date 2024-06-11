import React, { useState, useCallback, useRef } from 'react';
import { Paper, TextField, Box, Button, CircularProgress } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { MatchThreshold } from '../';

const predefinedRecords = `United States of America,Arizona,
U.S.A,Arizona,Pima
US,Arizona,Pima County
United States,Arkansas,Greene
Canada,,
Canada,Province of Nova Scotia,
México,"Oaxaca, Estado de",Ixtlán
México,Oaxaca,Municipio de Ixtlán`;

export function SearchBox({ onSubmit, isProcessing }) {
  const [names, setNames] = useState('');
  const [threshold, setThreshold] = useState(0.5);
  const fileInputRef = useRef();

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        const fileAsText = reader.result;
        setNames(fileAsText);
      };

      reader.readAsText(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    noClick: true,
  });

  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const onInputClick = (event) => {
    event.target.value = '';
  };

  return (
      <Paper>
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height={1}
        >
          <Box p={2} {...getRootProps()}>
            <input
                {...getInputProps()}
                ref={fileInputRef}
                style={{ display: 'none' }}
                onClick={onInputClick}
            />
            <TextField
                rows={10}
                multiline
                label="Records to check"
                fullWidth
                variant="outlined"
                value={names}
                helperText="Enter up to 5000 records or drag and drop a CSV/TXT file"
                onChange={(e) => setNames(e.target.value)}
            />
          </Box>
          <Box
              p={2}
              pt={0}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
          >
            <Box display="flex" gap={2}>
              <Button
                  onClick={() => onSubmit(names, threshold)}
                  variant="contained"
                  color="primary"
              >
                Submit
              </Button>
              <Button
                  onClick={() => setNames('')}
                  variant="contained"
                  color="secondary"
              >
                Clear
              </Button>
              <MatchThreshold threshold={threshold} onChangeThreshold={setThreshold} />
              <Button
                  variant="contained"
                  onClick={handleFileButtonClick}
              >
                Add File
              </Button>
            </Box>
            <Box>
              <Button
                  onClick={() => setNames(predefinedRecords)}
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: 490 }}
              >
                Try me!
              </Button>
            </Box>
            <Box>
              {isProcessing && <CircularProgress size={30} />}
            </Box>
          </Box>
        </Box>
      </Paper>
  );
}
import "./App.css";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useState, useCallback } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "react-modal";

import { CypherList } from "./components/cyphers/CypherList";
import { cypherTemplates } from "./cyphers/templates";

import { styles } from "./components/cyphers/styles";
import { CypherTemplate } from "./cyphers/types";
import { getMapValue, getRandomUpTo } from "./utils";

function App() {
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [selectedTemplates, setSelectedTemplates] = useState<CypherTemplate[]>([]);
  const [numberOfCyphers, setNumberOfCyphers] = useState<string>("");

  const getSelectedTemplates = useCallback(() => {
    const numberOfTemplates = Number(numberOfCyphers);
    if (numberOfTemplates) {
      const cyphersToGenerate = [];
      for (let i = 0; i < numberOfTemplates; i++) {
        cyphersToGenerate.push(cypherTemplates[getRandomUpTo(cypherTemplates.length)]);
      }
      setSelectedTemplates(cyphersToGenerate);
    }
  }, [numberOfCyphers, cypherTemplates, setSelectedTemplates]);

  return (
    <div className="App">
      <Typography variant="h3" gutterBottom>
        Loot Generator
      </Typography>

      <Container className="App-container">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="outlined-number"
            label="No. cyphers"
            type="number"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            value={numberOfCyphers}
            onChange={(e) => setNumberOfCyphers(e.target.value)}
          />
          <Button variant="contained" onClick={getSelectedTemplates} disabled={!numberOfCyphers} style={{ margin: 5 }}>
            {"Generate Pdf"}
          </Button>
          <Button
            variant="contained"
            onClick={() => setShowPreview(!showPreview)}
            style={{ margin: 5 }}
            disabled={!selectedTemplates.length}
          >
            {"Show preview"}
          </Button>

          {/* <Button
            variant="contained"
            onClick={getSelectedTemplates}
            disabled={!selectedTemplates.length}
            style={{ margin: 5 }}
          >
            <PDFDownloadLink
              document={<CypherList templates={selectedTemplates} />}
              fileName="somename.pdf"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              {"Download file"}
            </PDFDownloadLink>
          </Button> */}
        </Box>
      </Container>

      <Modal isOpen={showPreview}>
        <PDFViewer style={styles.viewer}>
          <CypherList templates={selectedTemplates} />
        </PDFViewer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Button variant="contained" onClick={getSelectedTemplates} disabled={!numberOfCyphers} style={{ margin: 5 }}>
            <PDFDownloadLink
              document={<CypherList templates={selectedTemplates} />}
              fileName="Cyphers.pdf"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              {"Download file"}
            </PDFDownloadLink>
          </Button>
          <Button variant="outlined" onClick={() => setShowPreview(false)} style={{ margin: 5 }}>
            {"Close preview"}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default App;

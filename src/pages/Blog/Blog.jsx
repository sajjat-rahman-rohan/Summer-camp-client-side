/* eslint-disable no-unused-vars */
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Blog.css";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="p-5 max-w-screen-xl mx-auto blog">
      <Helmet>
        <title>Ola Conversa | Blog</title>
      </Helmet>
      <h2 className="text-3xl py-5 text-center">
        <u>
          <b>Blog F&Q :</b>
        </u>
      </h2>

      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              What is axios in react ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              What is Axios? (A little bit of history) Axios is used to
              communicate with the backend and it also supports the Promise API
              that is native to JS ES6. It is a library which is used to make
              requests to an API, return data from the API, and then do things
              with that data in our React application.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              What is jwt authentication in react js ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              JWT, or JSON Web Token, is a web protocol used to share security
              information between client and a server. In a standard web
              application, private API requests contain JWT that is generated as
              a result of the verification of the user information, thus
              allowing these users to reach protected data and access services.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              What is react hook form ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              React Hook Form is a library that helps you validate forms in
              React. It is a minimal library without any other dependencies,
              while being performant and straightforward to use, requiring
              developers to write fewer lines of code than other form libraries.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              npm in react.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              NPM, the Node package manager is used for managing and sharing the
              packages for either React or Angular. NPM will be installed along
              with Nodejs. Node. js can be downloaded and installed from the
              official NodeJs website.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Blog;

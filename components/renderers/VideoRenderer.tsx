import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Player, Video, DefaultUi } from "@vime/react";

import { TextField, CardMedia, Alert, Fade } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { useFormik } from "formik";
import * as Yup from "yup";

function getId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}

export default function PickImage({
  open,
  handleClose,
  setThumbnail,
  inputs,
}: {
  open: boolean;
  handleClose: () => void;
  setThumbnail: (value: {
    src: string;
    poster: string;
    subtitles: Array<{ label: string; srcLang: string; src: string }>;
  }) => void;
  inputs?: {
    src: string;
    poster: string;
    subtitles: Array<{ label: string; srcLang: string; src: string }>;
  };
}) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const [alert, setAlert] = React.useState(false);

  // eslint-disable-next-line no-unused-vars
  const formik = useFormik<{
    src: string;
    poster: string;
    subtitles: Array<{ label: string; srcLang: string; src: string }>;
  }>({
    initialValues: inputs
      ? inputs
      : {
          src: "",
          poster: "",
          subtitles: [],
        },

    validationSchema: Yup.object().shape({
      src: Yup.string().url().required(),
      poster: Yup.string().required(),
      subtitles: Yup.array().of(Yup.object()).required(),
    }),
    onSubmit: () => {},
  });

  const {
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    getFieldProps,
    values,
    setFieldValue,
  } = formik;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll="body"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      fullWidth
    >
      <DialogTitle id="scroll-dialog-title">Upload Video</DialogTitle>
      <DialogContent dividers>
        <Fade in={true}>
          <Alert severity="warning" sx={{ mb: 2 }}>
            Please fill the input.
          </Alert>
        </Fade>

        {getId(values.src) ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${getId(values.src)}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <Player style={{ cursor: "grab" }}>
            <Video crossOrigin="" poster={values.poster}>
              <source data-src={values.src} type="video/mp4" />
            </Video>

            {/* We've replaced the `<Ui />` component. */}
            {/* We can turn off any features we don't want via properties. */}
            <DefaultUi>
              {/* We can place our own UI components here to extend the default UI. */}
            </DefaultUi>
          </Player>
        )}

        <TextField
          style={{ marginTop: 15 }}
          fullWidth
          label="Video Url"
          {...getFieldProps("src")}
          error={Boolean(
            // @ts-ignore
            touched["src"] && errors["src"]
          )}
          // @ts-ignore
          helperText={
            /* eslint-disable */

            errors["src"]

            /* eslint-enable */
          }
          disabled={isSubmitting}
        />

        <TextField
          style={{ marginTop: 15 }}
          fullWidth
          label="Video Poster"
          {...getFieldProps("poster")}
          error={Boolean(
            // @ts-ignore
            touched["poster"] && errors["poster"]
          )}
          // @ts-ignore
          helperText={
            /* eslint-disable */

            errors["poster"]

            /* eslint-enable */
          }
          disabled={isSubmitting}
        />

        {/* <Divider sx={{ mt: 5, mb: 5 }} /> */}
        {/* <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Subtitle settings
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              set subtitles on your video!
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
      </DialogContent>
      <DialogActions>
        <LoadingButton
          onClick={() => {
            // setThumbnail()

            if (formik.touched.src && !formik.errors["src"]) {
              setThumbnail(formik.values);
              handleClose();
            }
            setAlert(true);
          }}
        >
          Save
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}

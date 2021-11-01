import React from "react";

import { Editor } from "@tiptap/react";

import LinkIcon from "@mui/icons-material/Link";
import ImageIcon from "@mui/icons-material/Image";

import { styled } from "@mui/material/styles";
import UndoIcon from "@mui/icons-material/Undo";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import RedoIcon from "@mui/icons-material/Redo";
import CodeIcon from "@mui/icons-material/Code";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import ClearIcon from "@mui/icons-material/Clear";
import LayersClearIcon from "@mui/icons-material/LayersClear";
import FormatTextdirectionRToLIcon from "@mui/icons-material/FormatTextdirectionRToL";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import SubscriptIcon from "@mui/icons-material/Subscript";
import SuperscriptIcon from "@mui/icons-material/Superscript";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";

import Paper from "@mui/material/Paper";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography, Divider } from "@mui/material";

import PickImage from "../renderers/ImageRenderer";
import PickVideo from "../renderers/VideoRenderer";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const ProjectCreateContentToolbar = ({ editor }: { editor: Editor }) => {
  const [OpenPickImage, setOpenPickImage] = React.useState(false);
  const [OpenPickVideo, setOpenPickVideo] = React.useState(false);

  if (!editor) {
    return null;
  }

  return (
    <>
      <div>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            border: (theme) => `1px solid ${theme.palette.divider}`,
            flexWrap: "wrap",
            mb: 2,
          }}
        >
          <StyledToggleButtonGroup
            size="small"
            exclusive
            aria-label="text alignment"
          >
            <ToggleButton
              value="h1"
              aria-label="H1 Text"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              selected={editor.isActive("heading", { level: 1 })}
            >
              <Typography fontWeight={900}>H1</Typography>
            </ToggleButton>
            <ToggleButton
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              selected={editor.isActive("heading", { level: 2 })}
              value="h2"
              aria-label="H2 Text"
            >
              <Typography fontWeight={800}>H2</Typography>
            </ToggleButton>
            <ToggleButton
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              selected={editor.isActive("heading", { level: 3 })}
              value="h3"
              aria-label="H3 Text"
            >
              <Typography fontWeight={800}>H3</Typography>
            </ToggleButton>
            <ToggleButton
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 4 }).run()
              }
              selected={editor.isActive("heading", { level: 4 })}
              value="h4"
              aria-label="H4 Text"
            >
              <Typography fontWeight={700}>H4</Typography>
            </ToggleButton>
            <ToggleButton
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 5 }).run()
              }
              selected={editor.isActive("heading", { level: 5 })}
              value="h5"
              aria-label="H5 Text"
            >
              <Typography fontWeight={600}>H5</Typography>
            </ToggleButton>
            <ToggleButton
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 6 }).run()
              }
              selected={editor.isActive("heading", { level: 6 })}
              value="h6"
              aria-label="H6 Text"
            >
              <Typography fontWeight={500}>H6</Typography>
            </ToggleButton>
          </StyledToggleButtonGroup>
          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
          <StyledToggleButtonGroup
            size="small"
            exclusive
            aria-label="text alignment"
          >
            <ToggleButton
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
              selected={editor.isActive({ textAlign: "left" })}
              value="left"
              aria-label="left aligned"
            >
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
              selected={editor.isActive({ textAlign: "center" })}
              value="center"
              aria-label="Center aligned"
            >
              <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
              selected={editor.isActive({ textAlign: "right" })}
              value="right"
              aria-label="Right aligned"
            >
              <FormatAlignRightIcon />
            </ToggleButton>
            <ToggleButton
              onClick={() =>
                editor.chain().focus().setTextAlign("justify").run()
              }
              selected={editor.isActive({ textAlign: "justify" })}
              value="justify"
              aria-label="Justify aligned"
            >
              <FormatAlignJustifyIcon />
            </ToggleButton>
          </StyledToggleButtonGroup>
          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />

          <StyledToggleButtonGroup size="small" aria-label="text formatting">
            <ToggleButton
              onClick={() => editor.chain().focus().toggleSuperscript().run()}
              selected={editor.isActive("superscript")}
              value="superscript"
              aria-label="superscript"
            >
              <SuperscriptIcon />
            </ToggleButton>
            <ToggleButton
              onClick={() => editor.chain().focus().toggleSubscript().run()}
              selected={editor.isActive("subscript")}
              value="subscript"
              aria-label="subscript"
            >
              <SubscriptIcon />
            </ToggleButton>
            <ToggleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              selected={editor.isActive("bold")}
              value="bold"
              aria-label="bold"
            >
              <FormatBoldIcon />
            </ToggleButton>

            <ToggleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              value="italic"
              aria-label="italic"
              selected={editor.isActive("italic")}
            >
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              value="strike"
              aria-label="strike"
              selected={editor.isActive("strike")}
            >
              <FormatStrikethroughIcon />
            </ToggleButton>
            <ToggleButton
              onClick={() => editor.chain().focus().toggleCode().run()}
              value="code"
              aria-label="code"
              selected={editor.isActive("code")}
            >
              <CodeIcon />
            </ToggleButton>

            <ToggleButton
              onClick={() => editor.chain().focus().toggleHighlight().run()}
              value="highlight"
              aria-label="highlight"
              selected={editor.isActive("highlight")}
            >
              <BorderColorIcon />
            </ToggleButton>
            <ToggleButton
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              value="blockQuote"
              aria-label="blockQuote"
              selected={editor.isActive("blockQuote")}
            >
              <FormatQuoteIcon />
            </ToggleButton>
            <ToggleButton
              onClick={() => editor.chain().focus().setHorizontalRule().run()}
              selected={editor.isActive("HorizontalRule")}
              value="HorizontalRule"
              aria-label="HorizontalRule"
            >
              <HorizontalRuleIcon />
            </ToggleButton>
            <ToggleButton
              onClick={() => editor.chain().focus().setParagraph().run()}
              selected={editor.isActive("paragraph")}
              value="paragraph"
              aria-label="paragraph"
            >
              <FormatTextdirectionRToLIcon />
            </ToggleButton>
            <ToggleButton
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              selected={editor.isActive("underline")}
              value="underline"
              aria-label="underline"
            >
              <FormatUnderlinedIcon />
            </ToggleButton>
            <ToggleButton
              onClick={() => {
                setOpenPickImage(true);
              }}
              selected={editor.isActive("image-renderer")}
              value="image-renderer"
              aria-label="image-renderer"
            >
              <ImageIcon />
            </ToggleButton>
            <PickImage
              open={OpenPickImage}
              handleClose={() => setOpenPickImage(false)}
              setThumbnail={(value: { src: string; alt?: string }) => {
                editor
                  .chain()
                  .focus()
                  // @ts-ignore
                  .setImage({ src: value.src, alt: value.alt })
                  .run();
              }}
            />
            <ToggleButton
              onClick={() => {
                console.log(editor.state);
                setOpenPickVideo(true);
              }}
              selected={editor.isActive("videoPlayer")}
              value="videoPlayer"
              aria-label="videoPlayer"
            >
              <VideoLibraryIcon />
            </ToggleButton>
            <PickVideo
              open={OpenPickVideo}
              handleClose={() => setOpenPickVideo(false)}
              setThumbnail={(value: { src: string; alt?: string }) => {
                editor
                  .chain()
                  .focus()
                  // @ts-ignore
                  .setVideo({ src: value.src, alt: value.alt })
                  .run();
              }}
            />
            <ToggleButton
              onClick={() => {
                const previousUrl = editor.getAttributes("link").href;
                const url = window.prompt("URL", previousUrl);

                // cancelled
                if (url === null) {
                  return;
                }

                // empty
                if (url === "") {
                  editor
                    .chain()
                    .focus()
                    .extendMarkRange("link")
                    .unsetLink()
                    .run();

                  return;
                }

                // update link
                editor
                  .chain()
                  .focus()
                  .extendMarkRange("link")
                  .setLink({ href: url })
                  .run();
              }}
              selected={editor.isActive("link")}
              value="link"
              aria-label="link"
            >
              <LinkIcon />
            </ToggleButton>
            <ToggleButton
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              value="bullettList"
              aria-label="bullettList"
              selected={editor.isActive("bulletList")}
            >
              <FormatListBulletedIcon />
            </ToggleButton>
            <ToggleButton
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              value="orderedList"
              aria-label="orderedList"
              selected={editor.isActive("orderedList")}
            >
              <FormatListNumberedIcon />
            </ToggleButton>
          </StyledToggleButtonGroup>
          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />

          <StyledToggleButtonGroup
            size="small"
            exclusive
            aria-label="text alignment"
          >
            <ToggleButton
              onClick={() => editor.chain().focus().undo().run()}
              value="undo"
              aria-label="undo"
            >
              <UndoIcon />
            </ToggleButton>
            <ToggleButton
              onClick={() => editor.chain().focus().redo().run()}
              value="redo"
              aria-label="redo"
            >
              <RedoIcon />
            </ToggleButton>
          </StyledToggleButtonGroup>

          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />

          <StyledToggleButtonGroup
            size="small"
            exclusive
            aria-label="text alignment"
          >
            <ToggleButton
              onClick={() => editor.chain().focus().unsetAllMarks().run()}
              value="clear-mark"
              aria-label="clear-mark"
            >
              <LayersClearIcon />
            </ToggleButton>
            <ToggleButton
              onClick={() => editor.chain().focus().clearNodes().run()}
              value="clear-node"
              aria-label="clear-node"
            >
              <ClearIcon />
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Paper>
      </div>
    </>
  );
};

export default ProjectCreateContentToolbar;

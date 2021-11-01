import React from "react";
import { NodeViewWrapper, NodeViewRendererProps } from "@tiptap/react";
import { Player, Video, DefaultUi } from "@vime/react";
import Container from "@mui/material/Container";

function getId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}
export default function VideoPlayer(props: NodeViewRendererProps) {
  const subtitles: Array<{ label: string; srcLang: string; src: string }> =
    props.node.attrs.subtitles;
  return (
    <NodeViewWrapper
      className="react-component-content draggable-item  "
      data-type="draggable-item"
      draggable="true"
      data-drag-handle
      contentEditable="false"
    >
      {getId(props.node.attrs.src) ? (
        <Container
          maxWidth="sm"
          sx={{ textAlign: "center", marginTop: 3, marginBottom: 3 }}
        >
          {" "}
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${getId(props.node.attrs.src)}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Container>
      ) : (
        <Container sx={{ textAlign: "center", marginTop: 3, marginBottom: 3 }}>
          <Player style={{ cursor: "grab" }}>
            <Video crossOrigin="" poster={props.node.attrs.poster}>
              <source data-src={props.node.attrs.src} type="video/mp4" />
              {subtitles.map((subtitle) => (
                <track
                  key={subtitle.srcLang}
                  default
                  kind="subtitles"
                  src={subtitle.src}
                  srcLang={subtitle.srcLang}
                  label={subtitle.label}
                />
              ))}
            </Video>

            {/* We've replaced the `<Ui />` component. */}
            {/* We can turn off any features we don't want via properties. */}
            <DefaultUi>
              {/* We can place our own UI components here to extend the default UI. */}
            </DefaultUi>
          </Player>
        </Container>
      )}
    </NodeViewWrapper>
  );
}

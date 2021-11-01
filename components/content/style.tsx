import styled from "@emotion/styled";

const EditorStyled = styled.div`
  /* Basic editor styles */

  div[contenteditable="true"] {
    border: none;
    background-color: transparent;
    outline: none;
  }

  code {
    background-color: #f4f6f8;
    border-radius: 5px;
    padding: 5px 5px;
  }

  .has-focus {
    border-radius: 3px;
    box-shadow: 0 0 0 3px #00ab55;
    padding: 5px 5px;
  }

  /* Color swatches */
  .color {
    white-space: nowrap;

    &::before {
      content: " ";
      display: inline-block;
      width: 1em;
      height: 1em;
      border: 1px solid rgba(128, 128, 128, 0.3);
      vertical-align: middle;
      margin-right: 0.1em;
      margin-bottom: 0.15em;
      border-radius: 2px;
      background-color: var(--color);
    }
  }

  /* Placeholder (at the top) */
  .ProseMirror p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
  }

  .draggable-item {
    display: flex;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 0.5rem;
    cursor: grab;
    transition: 300ms;

    :hover {
      background: white;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05),
        0px 10px 20px rgba(0, 0, 0, 0.1);
    }

    .drag-handle {
      flex: 0 0 auto;
      position: relative;

      top: 0.3rem;
      margin-right: 0.5rem;
      cursor: grab;
      background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16"><path fill-opacity="0.2" d="M4 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }

    .content {
      flex: 1 1 auto;
    }
  }

  .ProseMirror {
    > * + * {
      margin-top: 1em;
    }

    img {
      max-width: 100%;
      height: auto;
      margin: auto;

      &.ProseMirror-selectednode {
        outline: 3px solid #00ab55;
      }
    }

    blockquote {
      padding-left: 1rem;
      border-left: 2px solid #00ab55;
    }
    ul,
    ol {
      padding: 0 1.5rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }

    code {
      background-color: rgba(#616161, 0.1);
      color: #616161;
    }

    pre {
      background: #0d0d0d;
      color: #fff;
      font-family: "JetBrainsMono", monospace;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;

      code {
        color: inherit;
        padding: 0;
        background: none;
        font-size: 0.8rem;
      }
    }

    img {
      max-width: 100%;
      height: auto;
    }

    hr {
      border-top: 1px solid #0d0d0d;
      margin: auto;
      width: 50%;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;

export default EditorStyled;

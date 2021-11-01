import React from "react";
import { NodeViewWrapper, NodeViewContent } from "@tiptap/react";
import styled from "@emotion/styled";

const NodeViewWrapperStyled = styled(NodeViewWrapper)`
  position: relative;

  select {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  }
`;
/*
{
  node: {
    attrs: { language: defaultLanguage },
  },
  updateAttributes,
  extension,
} 
*/

export default function CodeBlockComponent(props) {
  console.log(props.extension, props);
  return (
    <NodeViewWrapperStyled className="code-block">
      <select
        contentEditable={false}
        defaultValue={props.node.attrs.language}
        onChange={(event) =>
          props.updateAttributes({ language: event.target.value })
        }
      >
        <option value="null">auto</option>
        <option disabled>—</option>
        {props.extension.options.lowlight.listLanguages().map((lang, index) => (
          <option key={index} value={lang}>
            {lang}
          </option>
        ))}
      </select>
      <pre>
        <NodeViewContent as="code" class="language-css" />
      </pre>
    </NodeViewWrapperStyled>
  );
}

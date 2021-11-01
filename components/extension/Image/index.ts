import { Node, mergeAttributes, CommandProps } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import Component from "./Component";

interface optionsI {
  src: string;
  alt?: string;
}

interface ImageCommands<ReturnType> {
  imageRenderer: {
    /**
     * Add an image
     */
    setImage: (options: optionsI) => ReturnType;
  };
}

export interface ImageOptions {
  inline: boolean;
  HTMLAttributes: Record<string, any>;
}

const ImageNode = Node.create<ImageCommands<any>>({
  name: "image-renderer",

  group: "block",

  content: "block+",
  inline: false,

  draggable: true,
  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "image-renderer[src]",
      },
    ];
  },

  // @ts-ignore
  addCommands() {
    return {
      setImage:
        (options: optionsI) =>
        ({ commands }: CommandProps) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },

  renderHTML({ HTMLAttributes }) {
    return ["image-renderer", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});

export default ImageNode;

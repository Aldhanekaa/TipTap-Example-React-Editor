import { Node, mergeAttributes, CommandProps } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import Component from "./Component";

interface optionsI {
  src: string;
  subtitles?: Array<{ label: string; srcLang: string; src: string }>;
  poster?: string;
}

interface VideoPlayerCommands<ReturnType> {
  videoPlayer: {
    /**
     * Add an image
     */
    setVideo: (options: optionsI) => ReturnType;
  };
}

export interface ImageOptions {
  inline: boolean;
  HTMLAttributes: Record<string, any>;
}

const VideoPlayerNode = Node.create<VideoPlayerCommands<any>>({
  name: "videoPlayer",

  group: "block",

  content: "block+",
  inline: false,

  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
      subtitles: {
        default: null,
        parseHTML: (element) =>
          JSON.parse(String(element.getAttribute("data-subtitles"))),
      },
      poster: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'video-player[data-type="draggable-item"]',
      },
    ];
  },

  // @ts-ignore
  addCommands() {
    return {
      setVideo:
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
    return [
      "video-player",
      mergeAttributes(HTMLAttributes, { "data-type": "draggable-item" }),
      0,
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});

export default VideoPlayerNode;

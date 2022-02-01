import { Extension } from "@tiptap/core";

import { optionsI } from "components/extension/VideoPlayer/index";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    VideoPlayerExtension: {
      /**
       * Comments will be added to the autocomplete.
       */
      setVideo: (someProp: optionsI) => ReturnType;
    };
  }
}

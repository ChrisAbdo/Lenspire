import { InputBase } from '@mui/material';
import React from 'react';
import decorateMarkdown from '../../lib/markdown/decorateMarkdown';
import {
  insertMediaIntoMarkdown,
  uploadMedia,
} from '../../lib/markdown/uploadMedia';
import styles from './create.module.css';

type Props = {
  mdInputRef: React.RefObject<HTMLTextAreaElement>;
  mdValue: string;
  setMdValue: (value: string) => void;
};

export default function MarkdownEditor({
  mdInputRef,
  mdValue,
  setMdValue,
}: Props) {
  return (
    <InputBase
      inputRef={mdInputRef}
      multiline
      minRows={40}
      fullWidth
      placeholder="Enter a description here..."
      className="mt-4 border border-[#555555] rounded-xl p-4 text-white"
      value={mdValue}
      onChange={(e) => setMdValue(e.target.value)}
      onKeyDown={(e) => {
        // Bold
        if (e.key === 'b' && e.ctrlKey) {
          if (!mdInputRef.current) return;
          e.preventDefault();
          e.stopPropagation();
          decorateMarkdown(mdInputRef.current, 'bold', setMdValue);
        }

        // Italic
        if (e.key === 'i' && e.ctrlKey) {
          if (!mdInputRef.current) return;
          e.preventDefault();
          e.stopPropagation();
          decorateMarkdown(mdInputRef.current, 'italic', setMdValue);
        }

        // Tab
        if (e.key === 'Tab') {
          if (!mdInputRef.current) return;
          e.preventDefault();
          e.stopPropagation();
          decorateMarkdown(mdInputRef.current, 'tab', setMdValue);
        }
      }}
      // className={styles.editor}
      onDrop={async (e) => {
        e.preventDefault();

        const file = e.dataTransfer.files[0];
        if (!file || !mdInputRef.current) return;

        // Change the cursor to a loading icon
        mdInputRef.current.style.cursor = 'wait';

        const { uri, fileName } = await uploadMedia(file);

        // Insert the image into the editor
        await insertMediaIntoMarkdown(
          mdInputRef.current,
          uri,
          fileName,
          setMdValue
        );

        // Change the cursor back to normal
        mdInputRef.current.style.cursor = 'text';
      }}
    />
  );
}

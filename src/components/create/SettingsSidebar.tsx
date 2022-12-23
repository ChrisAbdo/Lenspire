import * as React from 'react';
import createStyles from './create.module.css';
import { Divider, Drawer, Grid, TextField, Typography } from '@mui/material';
import styles from './create.module.css';
import TagSelector from './TagSelector';
import { Web3Button } from '@thirdweb-dev/react';
import { LENS_CONTRACT_ADDRESS } from '../../../const/blockchain';
import { LENS_ABI } from '../../../const/abis';
import { useCreatePost } from '../../lib/lens/createPost';

type Props = {
  postMetadata: Record<string, any>;
  setPostMetadata: (metadata: Record<string, any>) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function TemporaryDrawer({
  postMetadata,
  setPostMetadata,
  open,
  setOpen,
}: Props) {
  const { mutateAsync: createPost } = useCreatePost();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(open);
    };

  const list = () => (
    <Grid
      container
      direction="column"
      className="p-4 bg-[#2a2a2a] h-content"
      role="presentation"
    >
      <Grid item className="flex justify-between ">
        <Typography variant="h3">Publish Design</Typography>
        {/* <button onClick={toggleDrawer(false)}>Close</button> */}
        <button
          onClick={toggleDrawer(false)}
          className="btn btn-square btn-ghost text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </Grid>
      <Grid item>
        <Typography variant="body2">
          click some buttons and fill out some fields to publish your design
        </Typography>
      </Grid>

      <Divider className={styles.divider} />

      {postMetadata.coverImage ? (
        <>
          <Typography variant="body1" className="text-white">
            Cover Image
          </Typography>
          <Typography className="text-[#555555] uppercase">
            <span className="text-red-500">*</span>You can change the cover
            image in the main post editor.
            <span className="text-red-500">*</span>
          </Typography>
          <img
            src={URL.createObjectURL(postMetadata.coverImage)}
            className={styles.sidebarImagePreview}
          />
        </>
      ) : (
        <Typography variant="body1" className={styles.label} color="error">
          No cover image selected
        </Typography>
      )}

      <Grid item className={styles.textFieldContainer}>
        <Typography variant="body1" className={styles.label}>
          Title
        </Typography>
        <Typography className="text-[#555555] uppercase">
          <span className="text-red-500">*</span>You can change the title in the
          main post editor.<span className="text-red-500">*</span>
        </Typography>

        <input
          type="text"
          placeholder={postMetadata.title || ''}
          className="input input-bordered w-full max-w-xs text-white mt-2"
          value={postMetadata.title || ''}
          disabled
        />
      </Grid>

      <Divider className={styles.divider} />

      <Grid item className={styles.textFieldContainer}>
        <Typography variant="body1" className={styles.label}>
          Style Tags
        </Typography>

        <TagSelector
          postMetadata={postMetadata}
          setPostMetadata={setPostMetadata}
        />
      </Grid>

      <Web3Button
        contractAddress={LENS_CONTRACT_ADDRESS}
        contractAbi={LENS_ABI}
        action={async () => await createPost({ ...postMetadata })}
        className="bg-white text-black hover:bg-[#555555]"
      >
        <Typography variant="h6">Publish to Lens 🌿</Typography>
      </Web3Button>
    </Grid>
  );

  return (
    <div>
      <Drawer anchor={'right'} open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}

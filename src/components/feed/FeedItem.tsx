import React from 'react';
import { MediaRenderer } from '@thirdweb-dev/react';
import styles from './feed.module.css';
import { Grid, Typography } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'; // Collect
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'; // Comment
import RepeatIcon from '@mui/icons-material/Repeat'; // Mirror
import { ProfileFeedQuery } from '../../graphql/generated';
import { getRelativeTime } from '../../lib/helper/dates';
import { getPreviewText } from '../../lib/helper/format';
import Link from 'next/link';
import { defaultProfilePicture } from '../../../const/images';
import Balancer from 'react-wrap-balancer';

type Props = {
  post: ProfileFeedQuery['feed']['items'][0]['root'];
};

export default function FeedItemComponent({ post }: Props) {
  return (
    <>
      <Link href={`/post/${post.id}`} className={styles.feedItem}>
        <Grid
          container
          item
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Grid
            item
            xs={12}
            sm={7}
            md={8}
            lg={9}
            className={styles.blogTextContainer}
          >
            <div className={styles.authorInfoContainer}>
              <div className={styles.authorProfilePicture}>
                <MediaRenderer
                  src={
                    // @ts-ignore: Type does exist.
                    post?.profile?.picture?.original?.url ||
                    defaultProfilePicture
                  }
                  alt={
                    post?.profile?.name || post?.profile?.handle || 'Loading...'
                  }
                  className={styles.authorProfilePicture}
                />
              </div>

              <div className={styles.authorInfo}>
                <Typography variant="body1" className={styles.authorName}>
                  {post?.profile?.name || post?.profile?.handle || 'Loading...'}
                </Typography>
                <Typography variant="body2" className={styles.authorName}>
                  {post?.profile?.handle || 'Loading...'} 🌿{' '}
                  {getRelativeTime(post.createdAt) || 'Loading...'}
                </Typography>
              </div>
            </div>
            <Balancer>
              <Typography variant="h3" className={styles.blogTitle}>
                {post?.metadata?.name}
              </Typography>
              <Typography variant="body1" className={styles.blogDescription}>
                {getPreviewText(post?.metadata?.content)}
              </Typography>
            </Balancer>
          </Grid>
          <Grid xs={12} sm={5} md={4} lg={3} item>
            <MediaRenderer
              src={
                post?.metadata?.image ||
                post?.metadata?.media?.[0]?.original?.url ||
                // @ts-ignore: Type does exist.
                post?.profile?.coverPicture?.original?.url ||
                // @ts-ignore: Type does exist.
                post?.profile?.picture?.original?.url ||
                ''
              }
              className={styles.blogImage}
              alt={post?.metadata?.name || 'Loading...'}
            />
          </Grid>
        </Grid>
        <div className={styles.blogFooter}>
          <div className={styles.metricContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 tooltip tooltip-open tooltip-bottom"
              data-tip="Collects"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>

            <Typography variant="body2" className={styles.metricText}>
              {post?.stats?.totalAmountOfComments}
            </Typography>
          </div>
          <div className={styles.metricContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
              />
            </svg>

            <Typography variant="body2" className={styles.metricText}>
              {post?.stats?.totalAmountOfMirrors}
            </Typography>
          </div>
          <div className={styles.metricContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>

            <Typography variant="body2" className={styles.metricText}>
              {post?.stats?.totalAmountOfCollects}
            </Typography>
          </div>
        </div>
      </Link>
    </>
  );
}

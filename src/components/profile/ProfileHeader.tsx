import { Typography, Chip, Container } from '@mui/material';
import { MediaRenderer, Web3Button } from '@thirdweb-dev/react';
import React from 'react';
import { ProfileQuery } from '../../graphql/generated';
import styles from './profile.module.css';
import {
  defaultCoverPhoto,
  defaultProfilePicture,
} from '../../../const/images';
import { LENS_CONTRACT_ADDRESS } from '../../../const/blockchain';
import { LENS_ABI } from '../../../const/abis';
import Balancer from 'react-wrap-balancer';
type Props = {
  profile: ProfileQuery;
};

export default function ProfileHeader({ profile }: Props) {
  console.log(profile);

  return (
    // <Container className="">
    //   <div className="">
    //     <div className={styles.imageWithGradient}>
    //       <MediaRenderer // @ts-ignore: Type does exist.
    //         src={
    //           // @ts-ignore: Type does exist.
    //           profile.profile?.coverPicture?.original?.url || defaultCoverPhoto
    //         }
    //         alt="Profile cover picture"
    //         className="bg-black "
    //       />
    //     </div>

    //     <div className={styles.profileMetadataContainer}>
    //       <div className={styles.pictureAndActionsContainer}>
    //         <MediaRenderer
    //           src={
    //             // @ts-ignore: Type does exist.
    //             profile.profile?.picture?.original?.url || defaultProfilePicture
    //           }
    //           alt="Profile picture"
    //           className={styles.profilePhoto}
    //         />
    //       </div>

    //       <Typography variant="h1" className={styles.profileName}>
    //         {profile.profile?.name}
    //       </Typography>

    //       <div className={styles.handleAndFollowsYouContainer}>
    //         <Typography variant="body2" className={styles.profileHandle}>
    //           @{profile.profile?.handle}
    //         </Typography>

    //         {profile?.profile?.isFollowing && (
    //           <Chip
    //             label="Follows You"
    //             variant="outlined"
    //             className={styles.followsYouPill}
    //           />
    //         )}
    //       </div>
    //       <Typography variant="body1" className={styles.profileBio}>
    //         {profile.profile?.bio}
    //       </Typography>
    //     </div>
    //   </div>
    // </Container>

    // <div className="flex flex-col items-center justify-center w-full h-full">
    //   <div className="card w-1/2 bg-base-100 shadow-xl border border-[#555555]">
    //     <figure className="px-10 pt-10">
    //       <img
    //         src={
    //           // @ts-ignore: Type does exist.
    //           profile.profile?.coverPicture?.original?.url || defaultCoverPhoto
    //         }
    //         alt="coverpicture"
    //         className="rounded-xl"
    //       />
    //     </figure>
    //     <div className="card-body items-center text-center">
    //       <img
    //         src={
    //           // @ts-ignore: Type does exist.
    //           profile.profile?.picture?.original?.url || defaultProfilePicture
    //         }
    //         alt="profilepicture"
    //         className="w-32 h-32 rounded-full mx-auto mask mask-hexagon-2"
    //       />
    //       <h2 className="card-title">
    //         {profile.profile?.name} || {profile.profile?.handle}
    //       </h2>
    //       <p>{profile.profile?.bio}</p>
    //       {/* p tag that shows the profiles follower count */}

    //       <div className="card-actions">
    //         <button className="btn btn-outline">
    //           More functions coming soon!
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      <Container className="-mt-24 ">
        <Balancer>
          <div className="flex justify-center bg-black p-4">
            <div className="w-full md:w-2/3 lg:w-2/3 border border-[#555555] rounded-3xl pb-4">
              <div>
                <img
                  src={
                    // @ts-ignore: Type does exist.
                    profile.profile?.coverPicture?.original?.url || '/lens.png'
                  }
                  alt="coverpicture"
                  className="rounded-t-3xl h-128 w-full"
                />
              </div>

              <div className="flex justify-between">
                <div className="rounded-full border-4 border-white inline-block -mt-16 w-32 ml-3">
                  <img
                    className="w-32 h-32 rounded-full"
                    src={
                      // @ts-ignore: Type does exist.
                      profile.profile?.picture?.original?.url ||
                      defaultProfilePicture
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="my-modal-6"
                    className="cursor-pointer rounded-full px-3 py-2 mt-3 mr-3 transition hover:bg-[#555555] inline-block border-2 border-white text-white font-bold"
                  >
                    Profile
                  </label>
                </div>
              </div>

              <div className="ml-3 mt-3">
                <p className="font-bold text-lg">{profile.profile?.name}</p>
                <p className="text-gray-500">@{profile.profile?.handle}</p>
              </div>

              <div className="px-3 mt-3">
                <p className="">{profile.profile?.bio}</p>
              </div>
            </div>
          </div>
        </Balancer>
      </Container>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle bg-black">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Sorry! Not implemented yet. sadface
          </h3>
          <p className="py-4">
            who knows when this will be implemented, but it will be soon!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

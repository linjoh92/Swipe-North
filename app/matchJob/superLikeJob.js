'use client'
import styles from './matchJob.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillCheckCircle } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import superLikeImg from '../../public/image/superLikeIcon.svg';
import { saveToStorage, getFromStorage } from '../storage';
import { useLanguage } from '../language';


export default function SuperLikedJobs(props) {
  const { id, imgUrl, companyName, jobTitle, type, updateSuperLikeList } = props;
  const { text } = useLanguage('swe');

  const handleDelete = () => {
    const superLike = getFromStorage('superLike');
    const jobIndex = superLike.findIndex((job) => job.id === id);
    superLike.splice(jobIndex, 1);
    saveToStorage('superLike', superLike);
    updateSuperLikeList(superLike);
  };

  const handleApply = () => {
    const superLike = getFromStorage('superLike');
    const jobIndex = superLike.findIndex((job) => job.id === id);
    const appliedJob = superLike[jobIndex];
    superLike.splice(jobIndex, 1);
    saveToStorage('superLike', superLike);

    const appliedJobs = getFromStorage('appliedJobs') || [];
    appliedJobs.push(appliedJob);
    saveToStorage('appliedJobs', appliedJobs);
    updateSuperLikeList(superLike);
  };

  return (
    <motion.div
      className={styles.matchedContainer}
      whileHover={{ scale: 1.02 }}
      drag="x"
      dragConstraints={{ left: -135, right: 0, dragElastic: 0.2 }}
    >
      <Image
        src={imgUrl}
        alt="photo-job"
        width={100}
        height={100}
        className={styles.image}
      />
      <div className={styles.textConatiner}>
        <Link href={`/matchJob/${id}`}>
          <h2>
            {companyName}
            <Image
              src={superLikeImg}
              alt="SuperLike"
              width={20}
              height={20}
              className={styles.superLikeStar}
            />
          </h2>
        </Link>
        <p>{jobTitle}</p>
        <p>{type}</p>
      </div>

      <motion.div className={styles.deliteOrAppliedConatiner}>
        <motion.div
          className={styles.delite}
          whileHover={{ color: '#721904' }}
          whileTap={{ scale: 0.9 }}
          onClick={handleDelete}
        >
          <FaTrashAlt style={{ fontSize: '1rem' }} /> {text.delete}
        </motion.div>
        <motion.div
          className={styles.applied}
          whileHover={{ color: '#7B932E' }}
          whileTap={{ scale: 0.9 }}
          onClick={handleApply}
        >
          <AiFillCheckCircle style={{ fontSize: '1.2rem' }} /> {text.applied}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

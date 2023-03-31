import styles from './matchJob.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillCheckCircle } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLocalStorage } from '../utils/localStorage';

export default function MatchedJobs(props) {
  const { id, imgUrl, companyName, jobTitle, type, updateJobList } = props;

  const [savedJobs, setSavedJobs] = useLocalStorage('savedJobs', []);
  const [appliedJobs, setAppliedJobs] = useLocalStorage('appliedJobs', []);

  const handleDelete = () => {
    const jobIndex = savedJobs.findIndex((job) => job.id === id);
    const updatedJobs = [...savedJobs.slice(0, jobIndex), ...savedJobs.slice(jobIndex + 1)];
    setSavedJobs(updatedJobs);
    updateJobList(updatedJobs);
  };

  const handleApply = () => {
    const jobIndex = savedJobs.findIndex((job) => job.id === id);
    const appliedJob = savedJobs[jobIndex];
    const updatedJobs = [...savedJobs.slice(0, jobIndex), ...savedJobs.slice(jobIndex + 1)];
    setSavedJobs(updatedJobs);
    const updatedAppliedJobs = [...appliedJobs, appliedJob];
    setAppliedJobs(updatedAppliedJobs);
    updateJobList(updatedJobs);
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
          <h2>{companyName}</h2>
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
          <FaTrashAlt style={{ fontSize: '1rem' }} /> Ta bort
        </motion.div>
        <motion.div
          className={styles.applied}
          whileHover={{ color: '#7B932E' }}
          whileTap={{ scale: 0.9 }}
          onClick={handleApply}
        >
          <AiFillCheckCircle style={{ fontSize: '1.2rem' }} /> Sökt
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

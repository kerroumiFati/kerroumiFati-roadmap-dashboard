import { useEffect, useRef , useState } from 'react';
import { api } from '../api/api';
import MilestoneCard from './MilestoneCard';
import { motion, useDragControls } from 'framer-motion';
const statuses = ['all', 'done', 'current', 'upcoming', 'tba'];
export default function Roadmap() {
  const containerRef = useRef(null);
  const [milestones, setMilestones] = useState([]);
  const [offset, setOffset] = useState(0);
  const [statusFilter, setStatusFilter] = useState('all');
  const LIMIT = 5;

  
  

  useEffect(() => {
    setMilestones([]);
    setOffset(0);
    fetchMilestones(0, true);
  }, [statusFilter]);


  useEffect(() => {
    if (offset !== 0) fetchMilestones(offset);
  }, [offset]);

  const fetchMilestones = async (offset, reset = false) => {
    try {
      const res = await api.get(`roadmap/?offset=${offset}&limit=${LIMIT}`);
      const filtered = statusFilter === 'all'
        ? res.data
        : res.data.filter(item => item.status === statusFilter);

      if (reset) {
        setMilestones(filtered);
      } else {
        setMilestones(prev => [...prev, ...filtered]);
      }
    } catch (err) {
      console.error(err);
    }
  };
const handleDragEnd = (event, info) => {
  const direction = info.offset.x;

  const currentIndex = statuses.indexOf(statusFilter);
  let nextIndex = currentIndex;

  if (direction < -50 && currentIndex < statuses.length - 1) {
    nextIndex = currentIndex + 1;
  } else if (direction > 50 && currentIndex > 0) {
    nextIndex = currentIndex - 1;
  }

  if (nextIndex !== currentIndex) {
    setStatusFilter(statuses[nextIndex]);
  }
};
const handleScroll = (e) => {
  const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
  if (bottom) {
    setOffset(prev => prev + LIMIT);
  }
};

 return (
        <motion.div
          className="px-4 max-w-xl mx-auto h-screen flex flex-col"
          ref={containerRef}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
        >
      <div className="flex justify-center gap-2 py-4">
    
        {statuses.map(status => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-3 py-1 rounded-full text-sm ${
              statusFilter === status 
               ? 'bg-blue-600 text-white'
               : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white'
            }`}
          >
            {status.toUpperCase()}
          </button>
        ))}
      </div>
      {/*overflow-y-auto flex-1*/}
      <div className="relative h-[500px] overflow-y-scroll no-scrollbar" onScroll={handleScroll}>
        
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            
          >
            <MilestoneCard milestone={milestone} status={milestone.status} />
          </motion.div>
        ))}
      </div>
  </motion.div>
  );
}

// FeedbackModal.tsx
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface FeedbackModalProps {
  open: boolean;
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ open, onClose }) => {
  const [selectedRating, setSelectedRating] = React.useState<number | null>(null);

  const handleRatingChange = (value: number) => {
    setSelectedRating(value);
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="feedbacModal"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h3" component="h2">
          Feedback Form
        </Typography>
        <Button className="closeModal" onClick={onClose}>
          <CloseIcon />
        </Button>
        <Typography variant="body1" id="modal-modal-description" sx={{ mt: 2 }}>
          How was your experience using our Cyber Security website so far?
        </Typography>
        <form action="#">
          <Box>
            <Box className="ratingWrapper" sx={{ display: 'flex' }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <input
                  key={value}
                  className={`ratingInput ${selectedRating && value <= selectedRating ? 'clicked' : ''}`}
                  type="number"
                  value={value}
                  onClick={() => handleRatingChange(value)}
                />
              ))}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <small>Least Satisfied</small>
              <small>Most Satisfied</small>
            </Box>
          </Box>
          <textarea className="feedBackMessage" placeholder="Add comments..." />
          <Button className="submitFeedback">Submit</Button>
        </form>
      </Box>
    </Modal>
  );
};
export default FeedbackModal;

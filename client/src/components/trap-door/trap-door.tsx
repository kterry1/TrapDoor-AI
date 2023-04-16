import './trap-door.css';

export interface TrapDoorProps {
  displayedText: string;
  peek: boolean;
  handleAnimationEnd: React.AnimationEventHandler<HTMLImageElement>;
  behindDoorImg: string;
}

const TrapDoor = ({
  displayedText,
  peek,
  handleAnimationEnd,
  behindDoorImg,
}: TrapDoorProps): JSX.Element => {
  return (
    <div className={peek ? 'trap-door disabled' : 'trap-door'}>
      <div className="trap-door-cover">
        <div className="trap-door-cover-text">{displayedText}</div>
      </div>

      <img
        draggable={false}
        onAnimationEnd={handleAnimationEnd}
        className={peek ? `animated-img-peek` : `animated-img`}
        alt={`animated image behind trap door`}
        src={behindDoorImg}
      />
    </div>
  );
};

export default TrapDoor;

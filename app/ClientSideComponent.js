export default function ClientSideComponent({ onSwipe }) {

  const handleSwipe = (direction, isSuperLike) => {
    // Call the onSwipe prop function, passing the direction and isSuperLike values
    onSwipe(direction, isSuperLike);
  };

  return (
    <>
      <button
        onClick={() => {
          handleSwipe('left', false);
        }}
      >
        Swipe left
      </button>
      <button
        onClick={() => {
          handleSwipe('up', false);
        }}
      >
        Swipe up
      </button>
      <button
        onClick={() => {
          handleSwipe('up', true);
        }}
      >
        Super like
      </button>
      <button
        onClick={() => {
          handleSwipe('right', false);
        }}
      >
        Swipe right
      </button>
    </>
  );
}

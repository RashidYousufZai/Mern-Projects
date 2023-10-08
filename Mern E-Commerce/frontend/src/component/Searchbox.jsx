import { useRef, useEffect } from 'react';
import './Search.scss';

function Searchbox() {
  const overlayRef = useRef();

  const closeSearch = () => {
    overlayRef.current.style.width = '0%';
  };

  useEffect(() => {
    overlayRef.current.style.width = '100%';

    // Event listener to close search when clicking outside the overlay
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        closeSearch();
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='main'>
        {/* Add a button or trigger element to open the search */}
      </div>

      <div ref={overlayRef} className='overlay'>
        <button className='close-button' onClick={closeSearch}>
          &times;
        </button>
        <div className='overlay-content'>
          <form>
            <input
              type='search'
              placeholder='iphone'
              className='search-input'
            />
            <button
              className='search-button'
              onClick={() => {
                console.log('Hi there');
                /* Your search logic here */
              }}
            >
              Search
            </button>
            <p className='search-text'>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Searchbox;

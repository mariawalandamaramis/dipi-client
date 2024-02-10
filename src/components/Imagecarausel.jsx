import React, { useEffect, useState } from 'react'

const Imagecarausel = () => {

  const dataImage = [
    { idx: 1, pos: 1, image: './project/acara/budaya/budaya.jpg', active: true },
    { idx: 2, pos: 2, image: './project/acara/tarian/tari-2.jpg', active: true },
    { idx: 3, pos: 3, image: './project/digital/femalegeek/blind-coding1.jpg', active: true },
    { idx: 4, pos: 4, image: './project/digital/kursusonline/kursus-online-terbaik-bersertifikat.jpg', active: true },
    { idx: 5, pos: 5,alt: 'tas limbah koran bekas', image: './project/kerajinan/limbah-kertas-koran/tas.png', active: false },
    { idx: 6, pos: 6, image: './project/kerajinan/makrame/makrame-1.jpg', active: false },
    { idx: 7, pos: 7, image: './project/kerajinan/tas-rajut/perempuan-disabilitas-tas-rajut.jpg', active: false },
    { idx: 8, pos: 8, image: './project/makanandanminuman/catering-sehat.jpg', active: false },
  ]

  const [cards, setCards] = useState(dataImage);

  const handleLeftClick = () => {
    const prevState = [...cards]
    const nextCardIdx = prevState
      .filter((filter) => filter.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;

    prevState.find((find) => find.active === false).active = true
    prevState.find((find) => find.idx === nextCardIdx).active = false

    prevState.find((find) => find.idx === nextCardIdx).pos =
      Math.max.apply(
        null,
        prevState.map(function (o) {
          return o.pos
        })
      ) + 1

    setCards(prevState)
  }

  const handleRightClikc = () => {
    const prevState = [...cards]
    const nextCardIdx = prevState
      .filter((filter) => filter.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
      .pop(1).idx;

    prevState.find((find) => find.active === false).pos =
      Math.min.apply(
        null,
        prevState.map(function (o) {
          return o.pos
        })
      ) - 1;

    prevState.find((find) => find.active === false).active = true
    prevState.find((find) => find.idx === nextCardIdx).active = false

    setCards(prevState);
  }

  const updateActiveItems = () => {
    const screenWidth = window.innerWidth;

    let activeItems;
    if (screenWidth < 768) {
      activeItems = 2; // Mobile: show 2 items
    } else if (screenWidth < 1024) {
      activeItems = 3; // Tablet: show 3 items
    } else {
      activeItems = 4; // Desktop: show 4 items
    }

    setCards((prevCards) =>
      prevCards.map((card, index) => ({
        ...card,
        active: index < activeItems,
      }))
    );
  };

  // useEffect to update active items on component mount and on window resize
  useEffect(() => {
    updateActiveItems();

    const handleResize = () => {
      updateActiveItems();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <div className='py-10'>
        <div className='text-center mb-8 p-6 md:px-20 lg:px-40'>
          <h1 className='text-3xl font-extrabold mb-2 text-green-900'>Mari Bersama Menjadi Bagian Dari Inovasi</h1>
          <p className='text-base font-norma text-green-900'>Saatnya bergerak lebih maju ciptakan perubahan lebih baik dari inovasi perempuan Indonesia</p>
        </div>

        <div className='relative'>

          <div className='flex'>
            {
              cards
                .filter((filter) => filter.active === true)
                .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
                .map((data, index) => (
                  <div key={index}>
                    <img class="object-cover h-80 w-96" src={data.image} alt="" />
                  </div>
                ))
            }
          </div>

          <div className='absolute top-10 sm:top-1/3 flex justify-between w-full p-6 md:px-20 lg:px-40'>
            <button onClick={() => handleLeftClick()} className='flex justify-center items-center rounded-lg p-2 bg-green-950'><img src="Chevron-left.svg" alt="" srcSet="" /></button>
            <button onClick={() => handleRightClikc()} className='flex justify-center items-center rounded-lg p-2 bg-green-950'><img src="Chevron-right.svg" alt="" srcSet="" /></button>
          </div>



        </div>
      </div>
    </>
  )
}

export default Imagecarausel
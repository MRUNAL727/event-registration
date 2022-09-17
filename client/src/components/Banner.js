import React from 'react';

const Banner = () => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div style={{ position: 'absolute', width: '100%' }}>
        <img src="/coding.jpg" style={{ height: '100vh', width: '100%' }} />
      </div>

      <div
        style={{
          border: '1px solid black',
          width: '23%',
          padding: 20,
          position: 'absolute',
          backgroundColor: 'white',
          right: '10%',
          top: '110px',
          borderRadius: 5,
          opacity: 0.8,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplate: '90px/ 1fr 1fr 1fr',
            justifyItems: 'center',
            alignItems: 'end',
            border: '1px solid black',
          }}
        >
          <div style={{ lineHeight: 0 }}>
            <p style={{ color: '#B8B8B8' }}>Start</p>
            <h5>8:00 PM</h5>
          </div>
          <div style={{ lineHeight: 0, textAlign: 'center' }}>
            <p>Sep</p>
            <h2>27</h2>
            <h5 style={{ color: '#B8B8B8' }}>Tuesday</h5>
          </div>
          <div style={{ lineHeight: 0 }}>
            <p style={{ color: '#B8B8B8' }}>End</p>
            <h5>11:00 PM</h5>
          </div>
        </div>

        <hr style={{ color: '#F0F0F0', opacity: 0.3 }} />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '80%',
            margin: 'auto',
          }}
        >
          <div>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  background: 'rgb(245, 245, 245)',
                  background:
                    'linear-gradient(180deg, rgba(240,240,240,1) 35%, rgba(238,237,237,1) 50%, rgba(250,250,250,1) 51%, rgba(215, 215, 215,1) 69%)',
                  padding: 18,
                  fontSize: 20,
                  borderRadius: 5,
                  margin: 4,
                }}
              >
                2
              </div>
              <div
                style={{
                  background: 'rgb(245, 245, 245)',
                  background:
                    'linear-gradient(180deg, rgba(240,240,240,1) 35%, rgba(238,237,237,1) 50%, rgba(250,250,250,1) 51%, rgba(215, 215, 215,1) 69%)',
                  padding: 18,
                  fontSize: 20,
                  borderRadius: 5,
                  margin: 4,
                }}
              >
                9
              </div>
            </div>
            <div style={{textAlign: 'center', padding:10, color:'#B8B8B8'}}>Days</div>
          </div>
          <h2>:</h2>
          <div
            style={{
              background: 'rgb(245, 245, 245)',
              background:
                'linear-gradient(180deg, rgba(240,240,240,1) 35%, rgba(238,237,237,1) 50%, rgba(250,250,250,1) 51%, rgba(215, 215, 215,1) 69%)',
              padding: 18,
              fontSize: 20,
              borderRadius: 5,
              margin: 4,
            }}
          >
            1
          </div>
          <div
            style={{
              background: 'rgb(245, 245, 245)',
              background:
                'linear-gradient(180deg, rgba(240,240,240,1) 35%, rgba(238,237,237,1) 50%, rgba(250,250,250,1) 51%, rgba(215, 215, 215,1) 69%)',
              padding: 18,
              fontSize: 20,
              borderRadius: 5,
              margin: 4,
            }}
          >
            8
          </div>
          <h2>:</h2>
          <div
            style={{
              background: 'rgb(245, 245, 245)',
              background:
                'linear-gradient(180deg, rgba(240,240,240,1) 35%, rgba(238,237,237,1) 50%, rgba(250,250,250,1) 51%, rgba(215, 215, 215,1) 69%)',
              padding: 18,
              fontSize: 20,
              borderRadius: 5,
              margin: 4,
            }}
          >
            2
          </div>
          <div
            style={{
              background: 'rgb(245, 245, 245)',
              background:
                'linear-gradient(180deg, rgba(240,240,240,1) 35%, rgba(238,237,237,1) 50%, rgba(250,250,250,1) 51%, rgba(215, 215, 215,1) 69%)',
              padding: 18,
              fontSize: 20,
              borderRadius: 5,
              margin: 4,
            }}
          >
            2
          </div>
        </div>

        <button
          style={{
            width: '100%',
            backgroundColor: '#0076CE',
            color: 'white',
            padding: 15,
            border: 'none',
            fontSize: 18,
          }}
        >
          Book your seat
        </button>
      </div>
    </div>
  );
};

export default Banner;

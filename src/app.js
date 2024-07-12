import * as React from 'react'
import './globals.css'
import * as Lucide from 'lucide-react'

export var App = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          boxSizing: 'border-box',
          padding: 20,
          maxWidth: 450,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 40,
        }}
      >
        <div
          style={{
            contain: 'layout',
            width: 'max-content',
            height: 'max-content',
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <img
            data-aspect-ratio-locked
            src='./me-ia-small.png'
            style={{
              width: 100,
              height: 100,
              contain: 'layout',
              borderRadius: 50,
              overflow: 'hidden',
            }}
          />
          <div
            style={{
              contain: 'layout',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 20,
              height: 27.5,
              width: 112,
            }}
          >
            <a href='https://github.com/ruggi'>
              <Lucide.GithubIcon />
            </a>
            <a href='https://hachyderm.io/@federico'>
              <Lucide.EarthIcon />
            </a>
            <a href='https://linkedin.com/in/federicoruggi'>
              <Lucide.LinkedinIcon />
            </a>
          </div>
        </div>
        <span
          style={{
            wordBreak: 'break-word',
            contain: 'layout',
            width: 'max-content',
            fontWeight: 900,
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontSize: '3em',
            height: 'max-content',
            color: 'rgb(17, 17, 17, 1)',
          }}
        >
          Federico Ruggi
        </span>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 10,
            textAlign: 'center',
            width: '100%',
            lineHeight: '1.7em',
          }}
        >
          <div>
            I'm a software engineer working on distributed
            systems, cloud computing, and product design.
          </div>
          <div>
            I'm currently working at Shopify on Utopia, a
            design and coding tool where code is the source
            of truth.
          </div>
        </div>
      </div>
    </div>
  )
}

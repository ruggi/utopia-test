import * as React from 'react'
import './globals.css'
import { FlexCol } from './utils'
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
        flexDirection: 'column',
        gap: 40,
      }}
    >
      <img
        data-aspect-ratio-locked
        src='./assets/me-ia-small.png'
        style={{
          width: 100,
          height: 100,
          contain: 'layout',
          borderRadius: 50,
          overflow: 'hidden',
        }}
      />
      <span
        style={{
          wordBreak: 'break-word',
          contain: 'layout',
          width: 'max-content',
          fontWeight: 400,
          fontFamily: 'Lato',
          fontStyle: 'normal',
          fontSize: '3em',
          height: 'max-content',
        }}
      >
        Federico Ruggi
      </span>
      <div
        style={{
          contain: 'layout',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          height: 'max-content',
          width: 'max-content',
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
  )
}

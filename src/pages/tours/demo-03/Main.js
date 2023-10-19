import * as React from 'react'
import { useTour } from '@reactour/tour'
import { Mask } from '@reactour/mask'

export default function Main () {
  const { setIsOpen } = useTour()

  return (
    
    <div className="demo">
        <StaticMask />
      <header>
        <button onClick={() => setIsOpen(true)}>Open Tour</button>
      </header>
      <p>
        <span className="first-step">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Praesent at
        finibus nulla, quis varius justo. <span className="second-step">Vestibulum lorem</span> lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit enim vel libero sagittis efficitur. Maecenas iaculis metus et magna mollis, sit amet dictum arcu elementum. Vestibulum non turpis at enim aliquet lobortis. Donec vel gravida tellus. Praesent nec tristique velit, at ullamcorper nibh. Suspendisse potenti. Proin ac dolor justo. <span className="third-step">Praesent nisi mauris</span>, eleifend sed iaculis a, tincidunt et tellus. Etiam vitae velit risus.  
      </p>
    </div>
  )
}

function StaticMask() {
    const [isOpen, setIsOpen] = React.useState(false)
    const sizes = {
      width: 100,
      height: 100,
      top: 100,
      left: 100,
      right: 0,
      bottom: 0,
      x: 0,
      y: 0,
    }
    return (
      <>
        <button onClick={() => setIsOpen((o) => !o)}>
          {isOpen ? 'Close' : 'Open'} Mask
        </button>
        <svg style={{ width: 0, height: 0 }} viewBox="0 0 64 64">
          <clipPath id="cog">
            <path d="M4.6 0l5.2 57.5 23 6.5 23-6.5L61 0zm45.2 18.8h-27l.6 7.2h25.8l-2 21.8-14.4 4h-.2l-14.5-4-.9-11.1h7l.5 5.6 7.8 2.1 7.9-2.1.9-9.1H17l-1.9-21.4h35.4z" />
          </clipPath>
        </svg>
        {isOpen ? (
          <Mask
            sizes={sizes}
            styles={{
              clickArea: (
                base,
                { top, left, width, height, windowWidth, windowHeight }
              ) => {
                const l = (left * 100) / windowWidth
                const t = (top * 100) / windowHeight
                const r = ((left + width) * 100) / windowWidth
                const b = ((top + height) * 100) / windowHeight
                return {
                  ...base,
                  // clipPath: `polygon(0% 0%, 0% 100%, ${l}% 100%, ${l}% ${t}%, ${r}% ${t}%, ${r}% ${b}%, ${l}% ${b}%, ${l}% 100%, 100% 100%, 100% 0%)`,
                  // clipPath: `url(#cog)`,
                  // clipPath: `circle(80px at 50% 50%)`,
                  // clipPath: `inset(20px 20px 50px round 15px)`,
                  // width: windowWidth,
                  // clipPath: `path("M4.6 0l5.2 57.5 23 6.5 23-6.5L61 0zm45.2 18.8h-27l.6 7.2h25.8l-2 21.8-14.4 4h-.2l-14.5-4-.9-11.1h7l.5 5.6 7.8 2.1 7.9-2.1.9-9.1H17l-1.9-21.4h35.4z")`,
                  clipPath: `polygon(0px 0px, 0px ${windowHeight}px, ${left}px ${windowHeight}px, ${left}px ${top}px, ${
                    left + width
                  }px ${top}px, ${left + width}px  ${
                    top + height
                  }px , ${left}px  ${
                    top + height
                  }px, ${left}px  ${windowHeight}px, ${windowWidth}px  ${windowHeight}px, ${windowWidth}px 0px)`,
                  color: 'red',
                }
              },
              // maskWrapper: (base) => ({
              //   ...base,
              //   color: 'transparent',
              // }),
              // maskRect: (base, { windowWidth, windowHeight }) => ({
              //   ...base,
              //   width: windowWidth / 2,
              //   height: windowHeight / 2,
              //   color: 'blue',
              //   mask: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/stampTiles.svg)`,
              // }),
            }}
            onClick={() => setIsOpen(false)}
          />
        ) : null}
      </>
    )
  }
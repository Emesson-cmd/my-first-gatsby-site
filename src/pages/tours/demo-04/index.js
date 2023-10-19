import * as React from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
// Customizar popover
// Validar scroll
// Posição

export default function TourDemo04() {
  const config = {
    animate: false,
    // overlayColor: 'red',
    // smoothScroll: false,
    // allowClose: true,
    // overlayOpacity: 0.5,
    // stagePadding: 0,
    // stageRadius: 50,
    // allowKeyboardControl: false,
    // disableActiveInteraction: false,
    popoverClass: 'driverjs-theme',
    // showButtons: ['next'],
    // showProgress: true,
  };

  const driverObj = driver({
    showProgress: true,
    steps: [
      {
        element: '.page-header',
        popover: {
          title: 'Style However You Want',
          description:
            'You can use the default class names and override the styles or you can pass a custom class name to the popoverClass option either globally or per step.',
        },
      },
      { element: '.top-nav', popover: { title: 'Title', description: 'Description' } },
      { element: '.title', popover: { title: 'Title', description: <p>hi</p> } },
      { element: '.sidebar', popover: { title: 'Title', description: 'Description' } },
      { element: '.footer', popover: { title: 'Title', description: 'Description' } },
    ],
    // progressText: '{{current}} de {{total}}',
    // onPopoverRender: (popover, { config, state }) => {
    //   const firstButton = document.createElement('button');
    //   firstButton.innerText = 'Go to First';
    //   popover.footerButtons.appendChild(firstButton);

    //   firstButton.addEventListener('click', () => {
    //     driverObj.drive(0);
    //   });
    // },

    ...config,
  });

  //   driverObj.setConfig(config)

  // driverObj.highlight({
  //     element: '.title',
  //     popover: {
  //       title: 'Title for the Popover',
  //       description: 'Description for it',
  //     },
  //   });

  const handleStart = () => {
    driverObj.drive();
  };

  return (
    <div>
      <button onClick={handleStart}>Start demo</button>

      <div className="page-header">
        <h2>Page header</h2>
        <button onClick={() => alert()}>click me </button>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat non est a cursus.
        Cras porttitor eu ipsum sed consequat. Phasellus interdum velit luctus, commodo erat et,
        placerat dolor. Quisque quis lobortis turpis, vitae vehicula ex. Donec vehicula ac arcu eu
        euismod. Sed lacinia vestibulum mattis. Quisque eget pellentesque nunc. Aenean porta diam
        vel leo euismod scelerisque. Integer eleifend quam turpis, sed vehicula ex commodo ut.
        Curabitur vulputate sem nec purus vehicula, ut tincidunt mauris mollis. Sed sollicitudin
        neque nec luctus tincidunt. Nam lobortis suscipit neque quis volutpat. Aliquam suscipit odio
        libero, non cursus turpis tempor in. Maecenas diam nulla, egestas eget aliquam eget, luctus
        quis libero. Donec volutpat, ex id vestibulum pretium, metus augue ullamcorper lacus, ut
        facilisis felis quam eget ligula. Fusce nec porta neque, eu mattis nunc.
      </p>

      <div className="top-nav">
        <span>top nav</span>
      </div>

      <p>
        Aenean scelerisque ligula eget risus efficitur, id pellentesque tortor molestie. Integer
        faucibus metus non lorem ultricies, a tempor nisl aliquam. Nam velit magna, elementum id est
        sit amet, bibendum rutrum ligula. Sed ac purus eu sapien vestibulum viverra nec a justo. Sed
        mauris purus, semper quis est ac, consectetur mollis velit. Donec maximus lacus sit amet
        orci mollis tincidunt. Suspendisse magna dui, lobortis sit amet eros a, laoreet fermentum
        ex. Aliquam erat volutpat. Cras mattis magna id interdum hendrerit. Phasellus eget nisi
        sagittis, fringilla libero fringilla, hendrerit odio. Fusce fringilla, felis eu convallis
        lobortis, dolor nunc maximus purus, eu pretium nulla dui in purus. Morbi nec nisl blandit,
        malesuada ligula a, venenatis ante. Praesent at lacus at nibh consectetur placerat ut eget
        sapien. Curabitur sit amet ipsum felis. Donec quis semper erat.
      </p>

      <h2 className="title">TourDemo04</h2>

      <p>
        Mauris efficitur feugiat ullamcorper. Praesent commodo, diam eget facilisis porta, ante
        mauris scelerisque sapien, et suscipit mi mi quis quam. Integer massa lacus, ornare at
        maximus ac, congue eget tellus. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Ut id mattis nunc, sed ornare mauris. Integer eget enim
        erat. Donec volutpat nisi id urna posuere ornare. In ultrices scelerisque dapibus. Aenean
        ultrices tincidunt suscipit. Phasellus eget luctus enim, et consequat felis. Ut aliquam,
        justo vitae placerat feugiat, risus sapien hendrerit ante, eleifend scelerisque dolor turpis
        vitae felis. Aenean mollis felis scelerisque est pretium, non mollis est ultrices. Donec ut
        sem vel enim hendrerit posuere. Proin scelerisque elit sed dui dictum, ut sagittis est
        finibus. Sed pharetra est a elit scelerisque, sed accumsan ante vehicula.
      </p>

      <div className="sidebar">
        <span>side bar</span>
      </div>

      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Praesent auctor, eros quis laoreet fermentum, mi tellus dignissim massa, quis faucibus nunc
        dolor sed tellus. Mauris et magna porttitor nulla tempor tincidunt. Duis non elit quis ante
        venenatis rutrum a et nunc. Nulla aliquam vehicula libero, ultrices pretium libero mollis
        at. Mauris at malesuada leo. Praesent non accumsan elit, a ornare lorem. Quisque nec purus
        nisi. Duis nunc felis, luctus ac nunc ullamcorper, dignissim venenatis est. In fermentum,
        quam eu lacinia dapibus, risus ipsum pretium ante, at euismod libero diam et enim. Integer
        accumsan nunc a ex tristique, blandit bibendum felis dictum. Sed magna nisi, ultrices in
        posuere ut, iaculis luctus orci. Interdum et malesuada fames ac ante ipsum primis in
        faucibus.
      </p>

      <div className="footer">
        <span>footer</span>
      </div>
    </div>
  );
}

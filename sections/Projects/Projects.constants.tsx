import projAnibrowse from './assets/proj-anibrowse.png';
import projDroppin from './assets/proj-droppin.png';
import projLoakampus from './assets/proj-loakampus.png';
import projRenderer from './assets/proj-renderer.png';
import projGoldberg from './assets/proj-goldberg.png';
import projRiot from './assets/proj-riot.png';

import type { LinkIcon } from './types';

export const PROJECTS = [
    {
        coverImg: projDroppin,
        coverAlt: 'droppinprotocol',
        title: <span>Droppin Protocol</span>,
        description: <span>Built the frontend for Droppin Protocol. Droppin protocol provides an engagement layer to help track and gain insights from high quality engagement. Built with Next.js, React.js. This app is built on top of the Polygon network.</span>,
        URLs: [
            {
                icon: 'github' as LinkIcon,
                URL: "https://github.com/droppin2023/client"
            },
            {
                icon: 'link' as LinkIcon,
                URL: "https://droppinprotocol.com"
            }
        ]
    },
    {
        coverImg: projAnibrowse,
        coverAlt: 'anibrowse',
        title: <span>AniBrowse</span>,
        description: <span>Built a simple installable web anime browser using Next.js, with the AniList GraphQL API as the back end. The app works on both desktop and mobile.</span>,
        URLs: [
            {
                icon: 'github' as LinkIcon,
                URL: "https://github.com/metalboyrick/ani-browse"
            },
            {
                icon: 'figma' as LinkIcon,
                URL: "https://www.figma.com/file/H6wtMImyiDDZ0mKF0UXvqz/AniBrowse?t=Mq8Fu5dkCQPETjMK-1"
            },
            {
                icon: 'link' as LinkIcon,
                URL: "https://ani-browse.vercel.app/"
            }
        ]
    },
    {
        coverImg: projLoakampus,
        coverAlt: 'loakampus',
        title: <span>LoaKampus</span>,
        description: <span>An application for handling second hand transactions for Indonesian University Students using Android SDK and Firebase.</span>,
        URLs: [
            {
                icon: 'figma' as LinkIcon,
                URL: "https://www.figma.com/file/tKue9tRtYJ7huRbPWLOuqj/LOAKAMPUS?t=lKyVu5RlqEQhFgC7-1"
            },
            {
                icon: 'link' as LinkIcon,
                URL: "/loakampus.apk"
            }
        ]
    },
    {
        coverImg: projRenderer,
        coverAlt: 'renderer',
        title: <span>Simple Landscape Renderer</span>,
        description: <span>Developed a simple 3D graphics renderer with C++ and OpenGL that can display 3D models with variable lighting and position, as well as movable camera.</span>,
        URLs: [
            {
                icon: 'github' as LinkIcon,
                URL: "https://github.com/metalboyrick/simple-landscape-renderer"
            },
        ]
    },
    {
        coverImg: projRiot,
        coverAlt: 'riot city',
        title: <span>Riot City</span>,
        description: <span>Implemented a web-based 2D Clicker game. This project was an entry for Ludum Dare 49 game jam.</span>,
        URLs: [
            {
                icon: 'github' as LinkIcon,
                URL: "https://github.com/metalboyrick/riot-city-game"
            },
            {
                icon: 'link' as LinkIcon,
                URL: "https://metalboyrick.itch.io/riot-city"
            }
        ]
    },
    {
        coverImg: projGoldberg,
        coverAlt: 'goldberg',
        title: <span>Goldberg</span>,
        description: <span>Implemented a 2D Puzzle game with Godot Engine. This project was an entry for Godot Wild Jam. Ranked #2 in terms of fun.</span>,
        URLs: [
            {
                icon: 'github' as LinkIcon,
                URL: "https://github.com/metalboyrick/goldberg-game"
            },
            {
                icon: 'link' as LinkIcon,
                URL: "https://metalboyrick.itch.io/goldberg"
            }
        ]
    },
];
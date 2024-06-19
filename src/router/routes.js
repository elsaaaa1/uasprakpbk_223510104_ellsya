const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ]
  },
  {
    path: '/tugas1',
    redirect: () => {
      window.location.href = 'https://elsyaa-project-cv.netlify.app/';
    }
  },
  {
    path: '/tugas2',
    redirect: () => {
      window.location.href = 'https://elsaaputriananda.netlify.app/';
    }
  },
  {
    path: '/tugas3',
    redirect: () => {
      window.location.href = 'https://tugas3-prakpbk-223510104-eeu7.vercel.app/';
    }
  },
  {
    path: '/tugas4',
    redirect: () => {
      window.location.href = 'https://ellsyatugas4.netlify.app/';
    }
  },
  {
    path: '/tugas5',
    redirect: () => {
      window.location.href = 'https://pbkellsyatgs5.netlify.app/';
    }
  },
  {
    path: '/tugas6',
    redirect: () => {
      window.location.href = 'https://tgs6-pbk-223510104.vercel.app/';
    }
  },
  {
    path: '/tugas7',
    redirect: () => {
      window.location.href = 'https://tugas7-223510104.vercel.app/';
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

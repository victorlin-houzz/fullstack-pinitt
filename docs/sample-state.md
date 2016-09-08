```json
{
  session: {
    currentUser: {
      id: 1,
      username: "app-academy",
      description: "app-academy",
      image_url: "/assets/default_avatar.png",
      pins: [],
      boards: [],
      followers: [],
      following: []
    },
  user: {
    id: 2,
    username: "ruby",
    description: "ruby",
    image_url: "/assets/default_avatar.png",
    pins: [],
    boards: [],
    followers: [],
    following: []
  }
  },

  boards: {
    1: {
      title: "Funny world",
      description: "is cool",
      user: {},
      pins: []
    }
  },

  pins: {
    1: {
      title: "Sample Pin",
      description: "super fun",
      user: {},
      board: {},
      (Bonus) tags: {
        1: {
          id: 1
          name: "Jokes"
        }
      },
      (bonus) comments: {
        1:{
          id: 1,
          body: "Lol"
        }
      }
      (Bonus) likes: 30
    }
  },

  follows: {
    followers: {
      user: {}
    },
    following: {
      user: {}
    }
  },

  (bonus) notifications: {
    1: {
      receiver_id: 1,
      message: "George liked on your pin.",
      mentioner: {
        id: 2,
        username: "George",
        image_url: "/assets/default_avatar.png"
      }
      url: "/pins/1"
    }
  }
}
```

```json
{
  currentUser: {
    id: 1,
    username: "app-academy",
    image_url: "/assets/default_avatar.png"
  },

  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createPin: {errors: ["title can't be blank"]},
    createBoard: {errors: ["title can't be blank"]}
  },

  pins: {
    1: {
      title: "Sample Pin",
      description: "super fun",
      user_id: 1,
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

  boards: {
    1: {
      title: "Funny world",
      description: "is cool",
      user_id: 1
    }
  },

  follows: {
    followers: {
      user: {
        id: 2,
        username: "George",
        image_url: "/assets/default_avatar.png"
      }
    },
    followings: {
      user: {
        id: 2,
        username: "George",
        image_url: "/assets/default_avatar.png"
      }
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

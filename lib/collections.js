Schema = {};

Schema.createUserFormSchema = new SimpleSchema({
  username: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/,
    unique: true
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  password: {
    type: String,
    min: 8,
    autoform: {
      afFieldInput: {
        type: "password"
      }
    }
  },
  passwordConfirmation: {
    type: String,
    min: 8,
    autoform: {
      afFieldInput: {
        type: "password"
      }
    },
    custom: function () {
      if (this.value !== this.field('password').value) {
        return ("passwordMismatch");
      }
    }
  }
});

Schema.createUserFormSchema.messages({
  "passwordMismatch": "Passwords do not match",
});

//
//  Tracks
//

Tracks = new Mongo.Collection('tracks');

Schema.Tracks = new SimpleSchema({
  slug: {
    type: String,
    label: "Slug"
  },
  title: {
    type: String,
    label: "Title",
    max: 200
  }
})

Tracks.attachSchema(Schema.Tracks);

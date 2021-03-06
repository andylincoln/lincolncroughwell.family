import React from 'react'
const RSVPForm = () => {
  return (
    <div className="rsvp-block">
      <form
        className="rsvp-form"
        name="rsvp"
      >
        <fieldset>
          <label>
            <span>Name*</span>
            <input type="text" className="name" name="name" required />
          </label>
          <label>
            <span>Email*</span>
            <input type="email" className="email" name="email" required />
          </label>
          <div className="rsvp-attending">
            <legend>Will you be joining us?</legend>
            <div className="radio">
              <input
                type="radio"
                value="Attending"
                name="rsvp-attending"
                id="rsvp-attending-yes"
                className="a11y"
              />
              <label htmlFor="rsvp-attending-yes">
                Yes
                <span className="a11y">I will be attending</span>
              </label>
            </div>
            <div className="radio">
              <input
                type="radio"
                value="Not Attending"
                name="rsvp-attending"
                id="rsvp-attending-no"
                className="a11y"
              />
              <label htmlFor="rsvp-attending-no">
                Regretfully, no
                <span className="a11y">I will not be attending</span>
              </label>
            </div>
          </div>
          <div className="rsvp-party-size">
            <legend>
              How many are attending?*
              <span className="description">
                Including yourself. Please enter the number in your party.
              </span>
            </legend>
            <div className="input-number">
              <input
                type="number"
                placeholder="1"
                name="party-size"
                id="rsvp-form-party-size"
                min="0"
                max="15"
                defaultValue="0"
              />
              <label htmlFor="rsvp-form-party-size" className="a11y">
                The size of your party
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <span>What would you like for dinner?*</span>
            <span className="description">
              Please select the meals for each member of your party. 1 per
              person
            </span>
          </legend>
          <div className="input-number">
            <input
              type="number"
              placeholder="0"
              name="food-chicken"
              id="rsvp-form-food-chicken"
              min="0"
              defaultValue="0"
            />
            <label htmlFor="rsvp-form-food-chicken" name="food">
              Chicken Picatta
            </label>
          </div>
          <div className="input-number">
            <input
              type="number"
              placeholder="0"
              name="food-fish"
              id="rsvp-form-food-fish"
              min="0"
              defaultValue="0"
            />
            <label htmlFor="rsvp-form-food-fish">
              New England Baked Haddock
            </label>
          </div>
          <div className="input-number">
            <input
              type="number"
              placeholder="0"
              name="food-vegetarian"
              id="rsvp-form-food-veg"
              min="0"
              defaultValue="0"
            />
            <label htmlFor="rsvp-form-food-veg" className="vegetarian">
              Butternut Squash Ravioli
            </label>
          </div>
        </fieldset>
        <div className="rsvp-attending">
          <legend>Will you also join us for Sunday brunch?</legend>
          <div className="radio">
            <input
              type="radio"
              value="Attending Brunch"
              name="rsvp-attending-brunch"
              id="rsvp-attending-brunch-yes"
              className="a11y"
            />
            <label htmlFor="rsvp-attending-brunch-yes">Yes</label>
          </div>
          <div className="radio">
            <input
              type="radio"
              value="Not Attending Brunch"
              name="rsvp-attending-brunch"
              id="rsvp-attending-brunch-no"
              className="a11y"
            />
            <label htmlFor="rsvp-attending-brunch-no">Regretfully, no</label>
          </div>
        </div>

        <fieldset>
          <button type="submit">Send your RSVP</button>
        </fieldset>
      </form>
    </div>
  )
}

export default RSVPForm

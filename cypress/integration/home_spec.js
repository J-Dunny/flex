describe('Home page flow', () => {
    beforeEach(() => {
      cy.intercept("GET", "https://exercisedb.p.rapidapi.com/exercises", {
        newExercises: [
            {
                bodyPart: "waist",
                equipment: "body weight",
                gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
                id: "0001",
                name: "3/4 sit-up",
                target: "abs"
            },
              {
                bodyPart: "waist",
                equipment: "body weight",
                gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
                id: "0002",
                name: "45° side bend",
                target: "abs"
              },
              {
                bodyPart: "upper legs",
                equipment: "body weight",
                gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
                id: "1512",
                name: "all fours squad stretch",
                target: "quads"
              },
              {
                bodyPart: "back",
                equipment: "cable",
                gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
                id: "0007",
                name: "alternate lateral pulldown",
                target: "lats"
              },
              {
                bodyPart: "upper legs",
                equipment: "assisted",
                gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1710.gif",
                id: "1710",
                name: "assisted lying gluteus and piriformis stretch",
                target: "glutes"
              }

          ]
        }).as('get-exercises')


    })

    it('Should display title', () => {
        cy.visit('http://localhost:3000/home')
        .get('title')
        .contains("Flex")
    })

    it('Should display two buttons- Create a workout and Generate Random Workout', () => {
        cy.visit('http://localhost:3000/home')
        .get('button')
        .contains("Create A Workout")
        .get('button')
        .contains('Generate Random Workout')
    })
     
    it('Should display a create workout message ', () => {
        cy.visit('http://localhost:3000/home')
        .get("h2")
        .contains("You haven't created any workouts yet. Click Create Workout to begin!")
    })

    // it('Should generate random workout ', () => {
    //     cy.visit('http://localhost:3000/home')
    //     .get('button')
    //     .contains('Generate Random Workout').click()
    // })

    it('Should navigate to create workout page ', () => {
        cy.visit('http://localhost:3000/home')
        .get('button')
        .contains('Create A Workout').click()
        .get("h1")
        .contains('Create a new Workout!')
    })
    


})


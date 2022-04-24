describe('Create Workout page flow', () => {
    beforeEach(() => {
      cy.intercept("GET", "https://exercisedb.p.rapidapi.com/exercises", 
        [
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
        ).as('get-exercises')


    })

    it('Should display title', () => {
        cy.visit('http://localhost:3000/addworkout')
        .get('title')
        .contains("Flex")
    })

    it('Should display a button - View Your Workouts', () => {
        cy.visit('http://localhost:3000/addworkout')
        .get('button')
        .contains("View Your Workouts")
    })

    it('Should display 2 sentences', () => {
        cy.visit('http://localhost:3000/addworkout')
        .get('h1')
        .contains("Create a new Workout!")
        .get('p')
        .contains('Begin by Adding Exercises below')
    })    

    it('Should display a dropdown selector for categories', () => {
        cy.visit('http://localhost:3000/addworkout')
        .get('select')
        .contains('Choose Category')
    }) 

    it('Should display categories in selector and when clicked display the exercises', () => {
        cy.visit('http://localhost:3000/addworkout')
        .get('select').select("abs")
        .get('p')
        .contains('3/4 sit-up')
        .get('p')
        .contains('45° side bend')
    }) 

    it('Should add exercise to workout form', () => {
        cy.visit('http://localhost:3000/addworkout')
        .get('select').select("abs")
        .get('p')
        .contains('3/4 sit-up')
        .get('p')
        .contains('45° side bend')
        .get('button')
        .contains('Add Exercise').click()
        .get('.exercises-workout-form')
        .contains('Equipment: body weight')
    }) 

    it('Should add a workout then navigate back to home page', () => {
        cy.visit('http://localhost:3000/addworkout')
        .get('select').select("abs")
        .get('p')
        .contains('3/4 sit-up')
        .get('p')
        .contains('45° side bend')
        .get('button')
        .contains('Add Exercise').click()
        .get('.exercises-workout-form')
        .contains('Equipment: body weight')
        .get('input').type('test workout')
        .get('button')
        .contains('Add Workout').click()
        .get('.added')
        .contains('Your workout was added!!')
        .get('button')
        .contains('View Your Workouts').click()
        .get('.workout')
        .contains('test workout')
    }) 


})
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
        cy.visit('http://localhost:3000/home')
        .get('title')
        .contains("Flex")
    })

    it('Once workout is created user should be able to do workout', () => {
        cy.visit('http://localhost:3000/addworkout')
        .get('select').select("abs")
        .get('p').contains('3/4 sit-up')
        .get('p').contains('45° side bend')
        .get('button').contains('Add Exercise').click()
        .get('.exercises-workout-form').contains('Equipment: body weight')
        .get('input').type('test workout')
        .get('button').contains('Add Workout').click()
        .get('.added').contains('Your workout was added!!')
        .get('button').contains('View Your Workouts').click()
        .get('.workout').contains('test workout')
        .get('img').should('be.visible')
        .get('button').contains('FLEX!').click()
        .get('input[name="reps"]').type('12')
        .get('input[name="weight"]').type('200')
        .get('button').contains('+').click()
        .get('p').contains('Set 1: 12 reps x 200 lbs')
        
    })  

    it('After doing workout user should be able to navigate home and delete workout', () => {
        cy.visit('http://localhost:3000/addworkout')
        .get('select').select("abs")
        .get('p').contains('3/4 sit-up')
        .get('p').contains('45° side bend')
        .get('button').contains('Add Exercise').click()
        .get('.exercises-workout-form').contains('Equipment: body weight')
        .get('input').type('test workout')
        .get('button').contains('Add Workout').click()
        .get('.added').contains('Your workout was added!!')
        .get('button').contains('View Your Workouts').click()
        .get('.workout').contains('test workout')
        .get('img').should('be.visible')
        .get('button').contains('FLEX!').click()
        .get('input[name="reps"]').type('12')
        .get('input[name="weight"]').type('200')
        .get('button').contains('+').click()
        .get('p').contains('Set 1: 12 reps x 200 lbs')
        .get('button').contains('Home').click()
        .get('button').contains('❌').click()
        .get('div').should('not.contain', 'img')
    })



})
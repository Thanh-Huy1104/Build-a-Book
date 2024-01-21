export async function getStory(userInput) {
    try {
      const response = await fetch('http://localhost:3000/getStory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "user_input": userInput }),
      });
  
      if (!response.ok) {
        throw new Error('API request failed');
      }
      console.log('working!');
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

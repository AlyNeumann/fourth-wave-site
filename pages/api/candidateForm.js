import clientPromise from '../../lib/mongodb-connect';
import Forms from '../../models/Forms';

export default async function handler(req, res) {

  const formType = 'candidate'

  const {first,
    last,
    email,
    twitter, 
    facebook,
    socialother,
    reason, 
    wallet} = req.body;
  try {
    if (!first || !last || !email) {
      return res.status(400).json({ data: 'Please enter your first AND last name' })
    }
    if (!email) {
      return res.status(400).json({ data: 'Please enter your email address' })
    }
    if (!twitter && !facebook && !socialother) {
      return res.status(400).json({ data: 'Please enter at least one social media account' })
    }

    const forms= new Forms({
      formType,
      first,
      last,
      email,
      twitter, 
      facebook,
      socialother,
      reason, 
      wallet
    });

    const client = await clientPromise
    const db = client.db("FourthWave")

    const formsCollection = db.collection("CandidateForms");
    console.log(formsCollection)
    const result = await formsCollection.insertOne(forms)
    console.log(result)
    // return res.status(200).send(result);
    return res.redirect(302, '/thankyou')

  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
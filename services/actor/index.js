const Actor = require("../../models/actor");




exports.getAllActors = async (req, res) => {
    try {
        const actors = await Actor.find({}).select({ 'acts': 0 });
        res.json(actors);
    } catch (e) {
        res.json({ message: "Eroor, actors not found", status: 400 })
    }
}


exports.getActorById = async (req, res) => {
    let id = req.params.id;
    try {
        const specificActor = await Actor.findById(id).populate('acts');
        res.send({ specificActor })
    } catch (e) {
        res.json({ message: "Failed to find actor", status: 404 })
    }
}























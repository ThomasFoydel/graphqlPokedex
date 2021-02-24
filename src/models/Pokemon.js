import mongoose from 'mongoose';

const pokemonDimension = mongoose.Schema({
  minimum: String,
  maximum: String,
});

const evolultionReq = mongoose.Schema({
  amount: Number,
  name: String,
});

const attack = mongoose.Schema({
  name: String,
  type: String,
  damage: Number,
});

const attackObj = mongoose.Schema({
  fast: [attack],
  special: [attack],
});

const evolution = mongoose.Schema({
  id: String,
  name: String,
});

const pokemonSchema = mongoose.Schema({
  id: String,
  name: String,
  classification: String,
  types: [String],
  resistant: [String],
  weight: pokemonDimension,
  height: pokemonDimension,
  fleeRate: Number,
  evolutionRequirements: evolultionReq,
  evolutions: [evolution],
  maxCP: Number,
  maxHP: Number,
  attacks: attackObj,
});

export default mongoose.model('Pokemon', pokemonSchema);

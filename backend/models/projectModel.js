import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
	{
		projectID: { type: String, required: true, unique: true },
		projectName: { type: String, required: true },
		image: { type: String, required: true },
		url: { type: String, required: true }
	},
	{
		timestamps: true,
	}
);
const Project = mongoose.model('Project', projectSchema);

export default Project;

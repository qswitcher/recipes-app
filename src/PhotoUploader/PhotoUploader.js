import { Storage } from "aws-amplify";

export async function s3Upload(file) {
    const filename = `${Date.now()}-${file.name}`;

    const stored = await Storage.vault.put(filename, file, {
        contentType: file.type
    });

    return stored.key;
}

// handleSubmit = async event => {
//     event.preventDefault();

//     if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
//       alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB.`);
//       return;
//     }

//     this.setState({ isLoading: true });

//     try {
//       const attachment = this.file
//         ? await s3Upload(this.file)
//         : null;

//       await this.createNote({
//         attachment,
//         content: this.state.content
//       });
//       this.props.history.push("/");
//     } catch (e) {
//       alert(e);
//       this.setState({ isLoading: false });
//     }
//   }

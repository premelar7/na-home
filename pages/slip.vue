<template>
    <div>
        <input type="file" @change="uploadImage" accept="image/*" />
    </div>
</template>

<script setup>
const uploadImage = async (event) => {

    const file = event.target.files[0];
    if (!file) {
        console.log("NONE");
        return;
    }

    const formData = new FormData();
    formData.append('image', file);

    console.log(metadata);
    // POST the image to a server route
    // await fetch('/api/upload-and-crop', {
    //     method: 'POST',
    //     body: formData,
    // })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error('Error:', error));
};
</script>
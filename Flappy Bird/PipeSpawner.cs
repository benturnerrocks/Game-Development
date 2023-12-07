using System.Collections;
using System.Collections.Generic;
using System.Numerics;
using UnityEngine;

public class PipeSpawner : MonoBehaviour
{
    public GameObject pipe;
    public float spawnRate = 5;
    private float timer = 0;
    public float heightOffset = 4;

    // Start is called before the first frame update
    void Start()
    {
        spawnPipe();
    }

    // Update is called once per frame
    void Update()
    {
        if (timer < spawnRate)
        {
            timer += Time.deltaTime;
        } else 
        {
            spawnPipe();
            timer = 0;
        }
    }
    public void spawnPipe() 
    {
        float lowestPoint = transform.position.y - heightOffset;
        float highestPoint = transform.position.y + heightOffset;
        Instantiate(pipe,new UnityEngine.Vector3(transform.position.x, Random.Range(lowestPoint,highestPoint), transform.position.z),transform.rotation);
    }
}
